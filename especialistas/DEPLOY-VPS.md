# 🚀 Deploy Mali Spa - VPS

## 📋 Informações do Servidor

- **Domínio**: malispa.com.br
- **IP**: 161.97.145.112
- **Usuário**: root
- **Sistema**: Linux (Ubuntu/Debian recomendado)

## 🛠️ Pré-requisitos na VPS

### 1. Atualizar Sistema
```bash
apt update && apt upgrade -y
```

### 2. Instalar Node.js (versão 18+ LTS)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs
node -v  # Verificar instalação
npm -v
```

### 3. Instalar Nginx
```bash
apt install -y nginx
systemctl start nginx
systemctl enable nginx
systemctl status nginx
```

### 4. Instalar PM2 (Process Manager)
```bash
npm install -g pm2
```

### 5. Instalar Git
```bash
apt install -y git
```

## 📦 Deploy da Aplicação

### Passo 1: Clonar Repositório
```bash
cd /var/www
git clone https://github.com/SEU-USUARIO/malispa.git
cd malispa/frontend
```

### Passo 2: Instalar Dependências
```bash
npm install
```

### Passo 3: Build de Produção
```bash
npm run build
```

Isso criará a pasta `dist/` com os arquivos otimizados.

### Passo 4: Configurar Nginx

Criar arquivo de configuração:
```bash
nano /etc/nginx/sites-available/malispa
```

Conteúdo do arquivo:
```nginx
server {
    listen 80;
    server_name malispa.com.br www.malispa.com.br;

    root /var/www/malispa/frontend/dist;
    index index.html;

    # Logs
    access_log /var/log/nginx/malispa-access.log;
    error_log /var/log/nginx/malispa-error.log;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json image/svg+xml;

    # Cache para assets estáticos
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### Passo 5: Ativar Site
```bash
ln -s /etc/nginx/sites-available/malispa /etc/nginx/sites-enabled/
nginx -t  # Testar configuração
systemctl reload nginx
```

## 🔒 Configurar HTTPS com Let's Encrypt

### Instalar Certbot
```bash
apt install -y certbot python3-certbot-nginx
```

### Obter Certificado SSL
```bash
certbot --nginx -d malispa.com.br -d www.malispa.com.br
```

Siga as instruções:
1. Digite seu email
2. Aceite os termos
3. Escolha redirecionar HTTP para HTTPS (opção 2)

### Auto-renovação
O Certbot cria automaticamente um cron job. Verificar:
```bash
systemctl status certbot.timer
certbot renew --dry-run  # Testar renovação
```

## 🔄 Atualizações Futuras

### Script de Deploy Automatizado

Criar arquivo `/var/www/deploy-malispa.sh`:
```bash
#!/bin/bash

echo "🚀 Iniciando deploy Mali Spa..."

cd /var/www/malispa

echo "📥 Baixando alterações..."
git pull origin main

echo "📦 Instalando dependências..."
cd frontend
npm install

echo "🏗️  Building aplicação..."
npm run build

echo "🔄 Recarregando Nginx..."
systemctl reload nginx

echo "✅ Deploy concluído!"
```

Dar permissão:
```bash
chmod +x /var/www/deploy-malispa.sh
```

Usar:
```bash
/var/www/deploy-malispa.sh
```

## 🔍 Monitoramento e Logs

### Ver logs do Nginx
```bash
tail -f /var/log/nginx/malispa-access.log
tail -f /var/log/nginx/malispa-error.log
```

### Verificar status
```bash
systemctl status nginx
```

## 🛡️ Firewall (UFW)

```bash
apt install -y ufw
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw enable
ufw status
```

## 📊 Otimizações Adicionais

### 1. Adicionar robots.txt
Criar `/var/www/malispa/frontend/public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://malispa.com.br/sitemap.xml
```

### 2. Configurar redirects 301 (se necessário)
No arquivo Nginx, adicionar:
```nginx
# Redirecionar www para não-www
server {
    listen 80;
    server_name www.malispa.com.br;
    return 301 https://malispa.com.br$request_uri;
}
```

## 🚨 Troubleshooting

### Site não carrega
```bash
systemctl status nginx
nginx -t
tail -f /var/log/nginx/error.log
```

### Permissões
```bash
chown -R www-data:www-data /var/www/malispa/frontend/dist
chmod -R 755 /var/www/malispa/frontend/dist
```

### Limpar cache do navegador
Se as alterações não aparecem, limpar cache ou acessar em modo anônimo.

## 📝 Checklist de Deploy

- [ ] Servidor atualizado (apt update && upgrade)
- [ ] Node.js instalado (versão 18+)
- [ ] Nginx instalado e rodando
- [ ] Repositório clonado
- [ ] Dependências instaladas (npm install)
- [ ] Build criado (npm run build)
- [ ] Nginx configurado (/etc/nginx/sites-available/malispa)
- [ ] Site ativado (ln -s para sites-enabled)
- [ ] Nginx testado (nginx -t)
- [ ] SSL configurado (certbot)
- [ ] Firewall configurado (ufw)
- [ ] DNS apontando para o IP (161.97.145.112)
- [ ] Site acessível em https://malispa.com.br

## 🔗 DNS - Configuração

No painel do domínio (Registro.br ou provedor), criar:

```
Tipo    Nome    Valor               TTL
A       @       161.97.145.112      3600
A       www     161.97.145.112      3600
```

Aguardar propagação (até 48h, geralmente < 1h).

## 📞 Suporte

Em caso de problemas:
1. Verificar logs do Nginx
2. Testar configuração: `nginx -t`
3. Verificar permissões: `ls -la /var/www/malispa/frontend/dist`
4. Verificar DNS: `dig malispa.com.br`
5. Verificar SSL: `certbot certificates`

---

**Última atualização**: 30 de Janeiro de 2026
**Responsável**: Equipe Mali Spa
