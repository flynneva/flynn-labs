#
# Node.js & ROS2 Docker environment
#
FROM ros:eloquent
LABEL maintainer="Evan Flynn <evanflynn.msu@gmail.com>"

# Replacing shell with bash for later docker build commands
# This is needed for sourcing ROS later on
RUN mv /bin/sh /bin/sh-old && \
    ln -s /bin/bash /bin/sh
RUN echo "source /opt/ros/eloquent/setup.bash" >> $HOME/.bashrc

# Update and install dependencies
RUN apt-get update && apt-get install -y git locales python curl wget
RUN locale-gen en_US en_US.UTF-8 && update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
ENV LANG en_US.UTF-8

# Copy application code
COPY . /app/

# Install nvm, Node.js and node-gyp
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION v10.19.0

RUN mkdir $NVM_DIR
RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash \
    && . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH

WORKDIR /app

# Source the ROS underlay and run npm install
# sourcing ROS is needed to use the rclnodejs package
RUN source /opt/ros/eloquent/setup.bash && \
    npm install  && \
    npm run build

# Set common env vars
ENV NODE_ENV production
ENV PORT 8080

# start
CMD ["npm", "run", "start"]
