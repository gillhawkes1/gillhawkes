#!/bin/bash

/root/.nvm/versions/node/v22.2.0/bin/http-server /var/www/gillhawkes.com/public_html/gillhawkes/dist/gillhawkes/browser -p 3002 -P http://localhost:3002 -c-1 -S -C /etc/ssl/certs/ssl-cert-snakeoil.pem -K /etc/ssl/private/ssl-cert-snakeoil.key
echo "server started"