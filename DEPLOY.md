# Documentação de Deploy - Mali Spa

## Informações do Servidor

### Dados de Acesso VPS
- **Provedor**: Contabo
- **IP**: 161.97.145.112
- **Usuário**: root
- **Senha**: DYoi7AAcCbE8mUzu45Q88011YNjEK
- **Senha Alternativa**: M@liSp@2025!
- **Sistema Operacional**: Ubuntu/Debian

### Estrutura de Diretórios

```
/var/www/malispa/
└── frontend/          # Build da landing page React
```

### Configuração Nginx

**Arquivo**: `/etc/nginx/sites-available/malispa`

```nginx
server {
    listen 80;
    server_name malispa.com.br www.malispa.com.br;

    root /var/www/malispa/frontend;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**Link simbólico**: `/etc/nginx/sites-enabled/malispa`

## Domínios

### Principal
- **Domínio**: malispa.com.br
- **www**: www.malispa.com.br
- **SSL**: Certbot (Let's Encrypt)

### Gerenciamento de DNS
Configurar os registros DNS para apontar para o IP: 161.97.145.112

```
A     @              161.97.145.112
A     www            161.97.145.112
```

## Stack Tecnológica Servidor

### Software Instalado
- **Node.js**: v18.x
- **Nginx**: Servidor web
- **Certbot**: Certificados SSL
- **sshpass**: Automatização de deploy

### Serviços
```bash
# Status dos serviços
systemctl status nginx
systemctl status certbot.timer

# Recarregar Nginx
systemctl reload nginx

# Reiniciar Nginx
systemctl restart nginx
```

## Processo de Deploy

### Deploy Manual

1. **Build do projeto**
```bash
cd /Users/rodrigofelippe/Documents/projetosgit/malispa/frontend
npm run build
```

2. **Enviar arquivos para servidor**
```bash
sshpass -p 'DYoi7AAcCbE8mUzu45Q88011YNjEK' rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" dist/ root@161.97.145.112:/var/www/malispa/frontend/
```

3. **Recarregar Nginx**
```bash
sshpass -p 'DYoi7AAcCbE8mUzu45Q88011YNjEK' ssh -o StrictHostKeyChecking=no root@161.97.145.112 "systemctl reload nginx"
```

### Script de Deploy Automatizado

Criar arquivo `deploy.sh` na raiz do projeto:

```bash
#!/bin/bash
set -e

echo "🚀 Iniciando deploy do Mali Spa..."

# Build
echo "📦 Gerando build de produção..."
cd frontend
npm run build

# Deploy
echo "🌐 Enviando arquivos para servidor..."
sshpass -p 'DYoi7AAcCbE8mUzu45Q88011YNjEK' rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" dist/ root@161.97.145.112:/var/www/malispa/frontend/

# Reload Nginx
echo "🔄 Recarregando Nginx..."
sshpass -p 'DYoi7AAcCbE8mUzu45Q88011YNjEK' ssh -o StrictHostKeyChecking=no root@161.97.145.112 "systemctl reload nginx"

echo "✅ Deploy concluído com sucesso!"
echo "🌍 Acesse: https://malispa.com.br"
```

**Uso**:
```bash
chmod +x deploy.sh
./deploy.sh
```

## Configuração SSL (HTTPS)

### Instalação do Certbot
```bash
ssh root@161.97.145.112
apt install -y certbot python3-certbot-nginx
```

### Obter Certificado SSL
```bash
certbot --nginx -d malispa.com.br -d www.malispa.com.br
```

### Renovação Automática
O Certbot configura automaticamente um timer para renovação:
```bash
# Verificar status do timer
systemctl status certbot.timer

# Testar renovação
certbot renew --dry-run
```

## Monitoramento

### Logs do Nginx
```bash
# Logs de acesso
tail -f /var/log/nginx/access.log

# Logs de erro
tail -f /var/log/nginx/error.log

# Logs específicos do site
tail -f /var/log/nginx/malispa.access.log
tail -f /var/log/nginx/malispa.error.log
```

### Status do Sistema
```bash
# Espaço em disco
df -h

# Uso de memória
free -h

# Processos Nginx
ps aux | grep nginx

# Conexões ativas
netstat -tulpn | grep :80
netstat -tulpn | grep :443
```

## Backup

### Backup do Site
```bash
# Backup local antes de deploy
tar -czf backup-$(date +%Y%m%d-%H%M%S).tar.gz frontend/dist/

# Backup do servidor
ssh root@161.97.145.112 "tar -czf /root/backup-malispa-$(date +%Y%m%d).tar.gz /var/www/malispa"
```

### Restauração
```bash
# Restaurar do backup
scp root@161.97.145.112:/root/backup-malispa-YYYYMMDD.tar.gz .
ssh root@161.97.145.112
cd /var/www
tar -xzf /root/backup-malispa-YYYYMMDD.tar.gz
systemctl reload nginx
```

## Troubleshooting

### Nginx não inicia
```bash
# Verificar sintaxe da configuração
nginx -t

# Ver logs de erro
tail -50 /var/log/nginx/error.log

# Verificar portas em uso
netstat -tulpn | grep :80
```

### Site não carrega
```bash
# Verificar se Nginx está rodando
systemctl status nginx

# Verificar permissões
ls -la /var/www/malispa/frontend/

# Verificar se arquivos existem
ls /var/www/malispa/frontend/index.html
```

### Erro 502 Bad Gateway
```bash
# Reiniciar Nginx
systemctl restart nginx

# Verificar logs
tail -50 /var/log/nginx/error.log
```

### Cache do navegador
Após deploy, limpar cache:
- **Chrome/Edge**: Ctrl+Shift+R ou Ctrl+F5
- **Firefox**: Ctrl+Shift+R ou Ctrl+F5
- **Safari**: Cmd+Option+R

## Segurança

### Recomendações Implementadas
- ✅ SSL/TLS (HTTPS)
- ✅ Gzip compressão
- ✅ Cache de assets estáticos
- ✅ Firewall básico (portas 80, 443, 22)

### Melhorias Futuras
- [ ] Implementar fail2ban
- [ ] Configurar firewall UFW mais restritivo
- [ ] Implementar rate limiting no Nginx
- [ ] Adicionar headers de segurança (HSTS, CSP, etc)
- [ ] Monitoramento com Uptime Robot ou similar
- [ ] Backup automático diário

## Contatos Técnicos

### Provedor VPS
- **Contabo**: https://contabo.com
- **Painel**: Customer Control Panel

### Domínio
- **Registro**: (verificar onde malispa.com.br está registrado)

### Suporte
- **Desenvolvedor**: Rodrigo Felippe
- **Email**: (adicionar email de contato)

## Estatísticas de Acesso

### Comandos Úteis para Monitoramento

```bash
# Total de requisições
wc -l /var/log/nginx/access.log

# IPs únicos
awk '{print $1}' /var/log/nginx/access.log | sort -u | wc -l

# Páginas mais acessadas
awk '{print $7}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10

# Acessos por dia
awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1 | sort | uniq -c

# Taxa de sucesso (200 OK)
awk '{if($9==200) success++; total++} END {printf "%.1f%% (%d de %d)\n", (success/total*100), success, total}' /var/log/nginx/access.log

# Dispositivos Mobile vs Desktop
grep -i 'Mobile\|Android\|iPhone' /var/log/nginx/access.log | wc -l
grep -i 'Windows\|Macintosh' /var/log/nginx/access.log | grep -vi 'Mobile' | wc -l

# Últimos acessos
tail -20 /var/log/nginx/access.log
```

### Análise Completa
```bash
sshpass -p 'DYoi7AAcCbE8mUzu45Q88011YNjEK' ssh -o StrictHostKeyChecking=no root@161.97.145.112 "
echo '=== ESTATÍSTICAS DE ACESSO ===' &&
echo -e '\nTotal de requisições:' &&
wc -l /var/log/nginx/access.log &&
echo -e '\nIPs únicos:' &&
awk '{print \$1}' /var/log/nginx/access.log | sort -u | wc -l &&
echo -e '\nAcessos legítimos à página principal:' &&
grep 'GET / HTTP' /var/log/nginx/access.log | grep ' 200 ' | wc -l
"
```

## Changelog

### 2026-02-20 - Atualização Ritual Banho HAMMAM
- Atualizada descrição completa do Ritual Banho HAMMAM
- Melhorada comunicação dos benefícios e etapas do ritual
- Deploy realizado com sucesso
- **Estatísticas**: 1.672 requisições, 143 IPs únicos, 97 visualizações legítimas

### 2026-02-02 - Setup Inicial
- Servidor Contabo configurado
- Nginx instalado e configurado
- Deploy automatizado com rsync
- Site em produção: https://malispa.com.br

---

**Última atualização**: 20 de Fevereiro de 2026
**Versão**: 1.1.0

## Notas Importantes

⚠️ **SEGURANÇA**: Este arquivo contém credenciais sensíveis. Mantenha em local seguro e não compartilhe publicamente.

⚠️ **BACKUP**: Sempre faça backup antes de deploy ou alterações no servidor.

⚠️ **TESTES**: Teste localmente antes de fazer deploy para produção.
