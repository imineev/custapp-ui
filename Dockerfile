FROM cbras/ol67-nodejs:1.0

RUN mkdir -p /usr/src/app/www
COPY ./www/ /usr/src/app/www

ENV OCI_LIB_DIR=/opt/oracle/instantclient OCI_INC_DIR=/opt/oracle/instantclient/sdk/include LD_LIBRARY_PATH=/opt/oracle/instantclient:/lib64
WORKDIR /usr/src/app/www
RUN scl enable devtoolset-3 -- npm install

#expose the app port and let npm start the app
EXPOSE 9100
CMD [ "npm", "start" ]
