# 🚀 Documentação Completa do Deploy - Mali Spa

**Data do Deploy**: 29 de Janeiro de 2026
**Domínio**: https://malispa.com.br
**VPS**: 161.97.145.112
**Sistema Operacional**: Ubuntu Noble 24.04

---

## 📦 Software Instalado na VPS

### 1. Node.js
- **Versão**: 18.20.8 LTS
- **Fonte**: NodeSource Repository
- **Localização**: `/usr/bin/node`
- **NPM Versão**: 10.x (incluído)

**Comando de Instalação:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs
```

**Verificação:**
```bash
node --version  # v18.20.8
npm --version   # 10.x
```

---

### 2. Nginx
- **Versão**: 1.24.0
- **Instalação**: Repositório oficial Ubuntu
- **Serviço**: Ativo e habilitado (systemd)
- **Porta HTTP**: 80
- **Porta HTTPS**: 443

**Comando de Instalação:**
```bash
apt-get install -y nginx
systemctl enable nginx
systemctl start nginx
```

**Status:**
```bash
systemctl status nginx
# ● nginx.service - A high performance web server
#    Active: active (running)
```

---

### 3. Certbot (Let's Encrypt)
- **Versão**: Latest do repositório Ubuntu
- **Plugins**: python3-certbot-nginx
- **Auto-renovação**: Habilitada via systemd timer

**Comando de Instalação:**
```bash
apt-get install -y certbot python3-certbot-nginx
```

**Certificado Obtido:**
- **Domínios**: malispa.com.br, www.malispa.com.br
- **Emissor**: Let's Encrypt
- **Validade**: 90 dias
- **Expiração**: 30/04/2026
- **Auto-renovação**: Sim (via certbot.timer)

**Verificar Renovação:**
```bash
certbot renew --dry-run
systemctl status certbot.timer
```

---

## 📁 Estrutura de Arquivos no Servidor

### Diretório Principal
```
/var/www/malispa/
└── frontend/
    ├── index.html                    # 1.87 KB - HTML principal
    ├── assets/
    │   ├── index-BFw-xZVX.js        # 295.67 KB - JavaScript bundle
    │   └── index-DY_a8B7V.css       # 28.67 KB - Estilos CSS
    ├── sobre-nos.jpg                 # Imagem "Sobre Nós"
    ├── hero-massagem.jpg             # Imagem Hero principal
    ├── logo-dourado.jpg              # Logo Mali Spa
    ├── ambiente-spa.jpg              # Imagem ambiente
    ├── day-spa-drinks.jpg            # Day Spa Mali
    ├── day-spa-sentir-rosas.jpg      # Day Spa Sentir
    ├── qr-whatsapp.jpg               # QR Code WhatsApp
    ├── qr-instagram.jpg              # QR Code Instagram
    └── qr-google.jpg                 # QR Code Google Business
```

**Total de Arquivos**: 24 arquivos
**Tamanho Total**: 5.7 MB (otimizado)

---

## ⚙️ Configuração do Nginx

### Arquivo de Configuração
**Localização**: `/etc/nginx/sites-available/malispa`
**Link Simbólico**: `/etc/nginx/sites-enabled/malispa`

### Conteúdo Completo:
```nginx
# HTTP - Redireciona para HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name malispa.com.br www.malispa.com.br;

    # Redirecionar para HTTPS
    return 301 https://$server_name$request_uri;
}

# HTTPS - Configuração Principal
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name malispa.com.br www.malispa.com.br;

    # Certificado SSL (gerenciado pelo Certbot)
    ssl_certificate /etc/letsencrypt/live/malispa.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/malispa.com.br/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Diretório raiz do site
    root /var/www/malispa/frontend;
    index index.html;

    # Logs
    access_log /var/log/nginx/malispa_access.log;
    error_log /var/log/nginx/malispa_error.log;

    # SPA Routing - Fallback para index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache de Assets Estáticos (1 ano)
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compressão Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
}
```

### Recursos Habilitados:
- ✅ **HTTP/2** - Performance otimizada
- ✅ **SSL/TLS** - Criptografia Let's Encrypt
- ✅ **Gzip Compression** - Redução de banda
- ✅ **Cache Headers** - Assets com 1 ano de cache
- ✅ **SPA Routing** - React Router compatível
- ✅ **Redirecionamento HTTP → HTTPS** automático
- ✅ **Logs** em /var/log/nginx/

---

## 🔐 Segurança

### SSL/TLS
- **Protocolo**: TLS 1.2 e 1.3
- **Cipher Suites**: Configuração recomendada pelo Certbot
- **HSTS**: Não configurado (pode ser adicionado)
- **Renovação**: Automática a cada 60 dias

### Firewall (Recomendado)
```bash
# Configurar UFW (se não estiver ativo)
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw enable
```

---

## 🚀 Processo de Deploy Realizado

### Passo 1: Build Local
```bash
cd /Users/rodrigofelippe/Documents/projetosgit/malispa/frontend
npm run build
```

**Resultado:**
- **Tempo**: 765ms
- **JS Bundle**: 295.67 kB (gzip: 91.20 kB)
- **CSS Bundle**: 28.67 kB (gzip: 5.78 kB)
- **Output**: `dist/` folder

### Passo 2: Transferência para VPS
```bash
sshpass -p 'M@liSp@2025!' rsync -avz -e "ssh -o StrictHostKeyChecking=no" \
  dist/ root@161.97.145.112:/var/www/malispa/frontend/
```

**Resultado:**
- **24 arquivos** transferidos
- **5.7 MB** total
- **Speedup**: 96.20x
- **Método**: rsync (mais confiável que scp)

### Passo 3: Configuração Nginx
```bash
# Criar arquivo de configuração
nano /etc/nginx/sites-available/malispa

# Ativar site
ln -s /etc/nginx/sites-available/malispa /etc/nginx/sites-enabled/

# Testar configuração
nginx -t

# Recarregar Nginx
systemctl reload nginx
```

### Passo 4: SSL com Certbot
```bash
certbot --nginx -d malispa.com.br -d www.malispa.com.br
```

**Resultado:**
- ✅ Certificado obtido com sucesso
- ✅ Nginx configurado automaticamente
- ✅ Redirecionamento HTTPS ativado
- ✅ Auto-renovação configurada

---

## 🔄 Manutenção e Atualizações

### Atualizar Site (Deploy de Nova Versão)

**1. Build local:**
```bash
cd /Users/rodrigofelippe/Documents/projetosgit/malispa/frontend
npm run build
```

**2. Transferir para VPS:**
```bash
sshpass -p 'M@liSp@2025!' rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" \
  dist/ root@161.97.145.112:/var/www/malispa/frontend/
```

**3. Limpar cache (opcional):**
```bash
sshpass -p 'M@liSp@2025!' ssh -o StrictHostKeyChecking=no root@161.97.145.112 \
  "systemctl reload nginx"
```

### Verificar Status dos Serviços
```bash
# Status do Nginx
systemctl status nginx

# Logs do Nginx
tail -f /var/log/nginx/malispa_access.log
tail -f /var/log/nginx/malispa_error.log

# Status do Certificado SSL
certbot certificates

# Testar renovação
certbot renew --dry-run
```

### Backup
```bash
# Backup do site
sshpass -p 'M@liSp@2025!' rsync -avz -e "ssh -o StrictHostKeyChecking=no" \
  root@161.97.145.112:/var/www/malispa/frontend/ \
  ./backup-malispa-$(date +%Y%m%d)/

# Backup da configuração Nginx
sshpass -p 'M@liSp@2025!' scp -o StrictHostKeyChecking=no \
  root@161.97.145.112:/etc/nginx/sites-available/malispa \
  ./backup-nginx-malispa.conf
```

---

## 📊 Monitoramento

### Logs Importantes
```bash
# Logs de acesso (tráfego)
/var/log/nginx/malispa_access.log

# Logs de erro
/var/log/nginx/malispa_error.log

# Logs do Certbot
/var/log/letsencrypt/letsencrypt.log
```

### Comandos Úteis
```bash
# Ver últimas 50 requisições
tail -50 /var/log/nginx/malispa_access.log

# Ver erros recentes
tail -50 /var/log/nginx/malispa_error.log

# Monitorar em tempo real
tail -f /var/log/nginx/malispa_access.log

# Verificar status do site
curl -I https://malispa.com.br
```

---

## 🌐 URLs e Acessos

### URLs Públicas
- **Site Principal**: https://malispa.com.br
- **Alias**: https://www.malispa.com.br (redireciona para principal)
- **HTTP**: http://malispa.com.br (redireciona para HTTPS)

### Acesso SSH
```bash
# Via sshpass (automático)
sshpass -p 'M@liSp@2025!' ssh -o StrictHostKeyChecking=no root@161.97.145.112

# Via SSH manual
ssh root@161.97.145.112
# Senha: M@liSp@2025!
```

---

## ✅ Checklist de Deploy Concluído

- [x] VPS configurada e atualizada
- [x] Node.js 18.20.8 instalado
- [x] Nginx 1.24.0 instalado e configurado
- [x] Diretório `/var/www/malispa/frontend` criado
- [x] Build de produção gerado (765ms)
- [x] 24 arquivos transferidos via rsync (5.7 MB)
- [x] Configuração Nginx criada e testada
- [x] Site habilitado em `sites-enabled`
- [x] Certificado SSL obtido do Let's Encrypt
- [x] HTTPS configurado para malispa.com.br e www
- [x] Redirecionamento HTTP → HTTPS ativo
- [x] Auto-renovação SSL configurada
- [x] Gzip compression habilitada
- [x] Cache headers configurados (1 ano para assets)
- [x] SPA routing funcionando (fallback para index.html)
- [x] Site acessível e operacional

---

## 🎯 Especificações Técnicas

### Performance
- **Primeira Carga**: ~330 KB (JS + CSS comprimidos com gzip)
- **Assets**: Cache de 1 ano (navegador não recarrega)
- **Compressão**: Gzip ativo para todos os assets
- **HTTP/2**: Habilitado para multiplexing

### SEO e Meta Tags
- ✅ HTML semântico
- ✅ Meta tags configuradas
- ✅ Open Graph (Instagram preview)
- ✅ Mobile-friendly (responsive)
- ✅ HTTPS (ranking SEO)

### Compatibilidade
- ✅ React 18+
- ✅ Navegadores modernos (ES6+)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Desktop (Chrome, Firefox, Safari, Edge)

---

## 🔧 Troubleshooting

### Problema: Site não carrega
```bash
# 1. Verificar status do Nginx
systemctl status nginx

# 2. Verificar logs de erro
tail -50 /var/log/nginx/malispa_error.log

# 3. Testar configuração
nginx -t

# 4. Reiniciar Nginx
systemctl restart nginx
```

### Problema: Certificado SSL expirado
```bash
# 1. Verificar expiração
certbot certificates

# 2. Renovar manualmente
certbot renew

# 3. Recarregar Nginx
systemctl reload nginx
```

### Problema: Mudanças não aparecem
```bash
# 1. Limpar cache do navegador (Ctrl+Shift+R)

# 2. Verificar se arquivos foram atualizados
ls -lah /var/www/malispa/frontend/

# 3. Recarregar Nginx
systemctl reload nginx
```

---

## 📞 Informações de Contato

### Mali Spa
- **Site**: https://malispa.com.br
- **WhatsApp**: +55 83 99661-9603
- **Instagram**: @malispabr
- **Endereço**: Rua Nossa Senhora dos Navegantes, 431 - Tambaú, João Pessoa - PB

### VPS
- **Provedor**: (Informação do provedor)
- **IP**: 161.97.145.112
- **OS**: Ubuntu Noble 24.04
- **Acesso**: SSH root

---

**Documentação criada em**: 29 de Janeiro de 2026
**Última atualização**: 29 de Janeiro de 2026
**Versão**: 1.0.0

---

## 🎉 Status Final

**🟢 Site em Produção e Operacional**

✅ https://malispa.com.br está acessível
✅ SSL ativo e válido até 30/04/2026
✅ Auto-renovação configurada
✅ Performance otimizada
✅ Mobile-friendly
✅ Pronto para uso comercial
