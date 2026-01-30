# 🖥️ Informações da VPS - Mali Spa

## 🌐 Domínio e Acesso Web

- **Domínio Principal**: malispa.com.br
- **URL de Produção**: https://malispa.com.br
- **URL Alternativa**: https://www.malispa.com.br (redirecionado)

## 🔑 Credenciais de Acesso SSH

```
Host: 161.97.145.112
Usuário: root
Senha: DYoi7AAcCbE8mUzu45Q88011YNjEK
Porta: 22 (padrão SSH)
```

**Última verificação**: 30/01/2026 - Credenciais funcionando ✅

### Comando de Acesso
```bash
ssh root@161.97.145.112
```

## 📂 Estrutura de Diretórios

```
/var/www/malispa/
├── frontend/               # Aplicação React
│   ├── dist/              # Build de produção
│   ├── src/               # Código fonte
│   ├── public/            # Assets públicos
│   └── package.json
├── backend/               # API Fastify (futuro)
└── .git/                  # Repositório Git
```

## 🔧 Serviços Instalados

### Node.js
- **Versão**: 18+ LTS
- **Gerenciador**: npm
- **Verificar**: `node -v && npm -v`

### Nginx
- **Arquivo de Config**: `/etc/nginx/sites-available/malispa`
- **Link Simbólico**: `/etc/nginx/sites-enabled/malispa`
- **Logs**:
  - Access: `/var/log/nginx/malispa-access.log`
  - Error: `/var/log/nginx/malispa-error.log`
- **Comandos**:
  ```bash
  systemctl status nginx
  systemctl restart nginx
  systemctl reload nginx
  nginx -t  # Testar configuração
  ```

### SSL (Let's Encrypt)
- **Provedor**: Certbot
- **Certificados**: `/etc/letsencrypt/live/malispa.com.br/`
- **Auto-renovação**: Configurado via systemd timer
- **Comandos**:
  ```bash
  certbot certificates
  certbot renew --dry-run
  systemctl status certbot.timer
  ```

### Firewall (UFW)
```bash
ufw status
# Portas abertas:
# 22/tcp   - SSH
# 80/tcp   - HTTP
# 443/tcp  - HTTPS
```

## 🚀 Comandos Úteis

### Deploy Manual
```bash
cd /var/www/malispa/frontend
git pull origin main
npm install
npm run build
systemctl reload nginx
```

### Script Automatizado
```bash
/var/www/deploy-malispa.sh
```

### Monitoramento
```bash
# Logs em tempo real
tail -f /var/log/nginx/malispa-access.log
tail -f /var/log/nginx/malispa-error.log

# Verificar uso de disco
df -h

# Verificar uso de memória
free -h

# Processos ativos
top
htop  # Se instalado
```

## 🔐 Segurança

### SSH
- Acesso apenas via root (considerar criar usuário sudo)
- Porta padrão 22 (considerar alterar para porta customizada)
- **Recomendação**: Configurar autenticação por chave SSH

### Firewall
- UFW ativo
- Apenas portas essenciais abertas

### SSL
- Certificado válido Let's Encrypt
- Renovação automática configurada
- Redirecionamento HTTP → HTTPS ativo

## 📊 Especificações do Servidor

- **IP Público**: 161.97.145.112
- **Sistema Operacional**: Linux (Ubuntu/Debian)
- **Recursos**: (verificar com `free -h` e `df -h`)

## 🔄 Backup

### Arquivos Importantes para Backup
```
/var/www/malispa/           # Aplicação completa
/etc/nginx/sites-available/ # Configurações Nginx
/etc/letsencrypt/           # Certificados SSL
```

### Comando de Backup Sugerido
```bash
# Backup da aplicação
tar -czf malispa-backup-$(date +%Y%m%d).tar.gz /var/www/malispa

# Backup das configs
tar -czf nginx-backup-$(date +%Y%m%d).tar.gz /etc/nginx/sites-available/malispa
```

## 📞 DNS - Configuração Atual

**Provedor**: Registro.br (ou outro)

```
Tipo    Nome    Valor               TTL
A       @       161.97.145.112      3600
A       www     161.97.145.112      3600
```

### Verificar DNS
```bash
dig malispa.com.br
nslookup malispa.com.br
```

## 🐛 Troubleshooting Rápido

### Site não carrega
```bash
systemctl status nginx
nginx -t
tail -50 /var/log/nginx/malispa-error.log
```

### Alterações não aparecem
```bash
cd /var/www/malispa/frontend
npm run build
ls -la dist/  # Verificar se build foi criado
systemctl reload nginx
```

### Certificado SSL expirado
```bash
certbot renew
systemctl reload nginx
```

### Espaço em disco cheio
```bash
df -h
du -sh /var/log/*  # Verificar logs
# Limpar logs antigos se necessário
journalctl --vacuum-time=7d
```

## 📝 Checklist de Manutenção Mensal

- [ ] Atualizar sistema: `apt update && apt upgrade`
- [ ] Verificar certificado SSL: `certbot certificates`
- [ ] Revisar logs de erro do Nginx
- [ ] Fazer backup da aplicação
- [ ] Verificar espaço em disco: `df -h`
- [ ] Verificar uso de memória: `free -h`
- [ ] Testar velocidade do site (PageSpeed Insights)

## 🔗 Links Úteis

- **Site em Produção**: https://malispa.com.br
- **Whatsapp**: https://wa.me/5583996619603
- **Instagram**: https://instagram.com/malispabr
- **Documentação de Deploy**: `/especialistas/DEPLOY-VPS.md`

---

**Última atualização**: 30 de Janeiro de 2026
**Responsável**: Equipe Mali Spa
