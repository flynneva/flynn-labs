#
# Node.js & ROS2 Docker environment
#
FROM ros:eloquent
LABEL maintainer="Evan Flynn <evanflynn.msu@gmail.com>"

# Install Node.js using Node Versioning Manager (NVM)
# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set debconf to run non-interactively
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Install base dependencies
RUN apt-get update && apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        wget \
    && rm -rf /var/lib/apt/lists/*

ENV NODE_VERSION 0.10.19

# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# Use NVM to install specific Node.js Version
RUN source ~/.nvm/nvm.sh; \
    nvm install $NODE_VERSION \
    nvm use --delete-prefix $NODE_VERSION \
    node -v \
    npm -v
