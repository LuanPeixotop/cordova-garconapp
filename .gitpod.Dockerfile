FROM gitpod/workspace-full
                    
USER gitpod

RUN sudo apt-get -q update
RUN bash -c ". /home/gitpod/.sdkman/bin/sdkman-init.sh \
             && sdk install java 8.0.232.fx-zulu \
             && sdk default java 8.0.232.fx-zulu"
RUN sudo apt-get install -yq android-sdk
RUN npm -g install cordova

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && #     sudo apt-get install -yq bastet && #     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/
