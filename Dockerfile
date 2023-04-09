FROM node
WORKDIR client
COPY . /client
RUN npm install
EXPOSE 3000
CMD npm start