FROM node:10-alpine

WORKDIR /opt/app

ENV PORT=80

RUN echo 'set -e' >> /boot.sh

# daemon for cron jobs
RUN echo 'crond' >> /boot.sh
# RUN echo 'crontab .openode.cron' >> /boot.sh

# RUN echo 'npm install -g yarn' >> /boot.sh

COPY package.json ./
RUN echo 'yarn policies set-version' >> /boot.sh
RUN echo 'yarn global add @babel/plugin-transform-destructuring' >> /boot.sh
# RUN echo 'yarn global add node-sass' >> /boot.sh
RUN echo 'yarn install --force' >> /boot.sh
# CMD [ "npm", "start" ]

# RUN echo 'yarn' >> /boot.sh

# npm start, make sure to have a start attribute in "scripts" in package.json
# CMD sh /boot.sh
CMD sh /boot.sh && npm start
