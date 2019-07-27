# Projetos:

#Instalaçao do React JS :  
 	
https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-ubuntu-18-04-1/

   ou

https://nodejs.org/en/download/

https://github.com/nodejs/help/wiki/Installation

ou

https://github.com/nodesource/distributions/blob/master/README.md#deb



    Para executar:

        1º  Na pasta do projeto : npm install

        Obs.: Se em caso der erro :
            sudo npm update
            sudo npm audit fix

        2º npm start

  
#Instale o Java, principalmente o Jre :
https://sysadminwork.com/how-to-install-oracle-java-on-ubuntu-and-centos/

#Instale o jdk :
https://thishosting.rocks/install-java-ubuntu/ (Preferência o default)

        sudo update-alternatives --install "/usr/bin/java" "java" "/usr/local/jdk<YOUR VERSION>/bin/java" 1500

        sudo update-alternatives --install "/usr/bin/javaws" "javaws" "/usr/local/jdk<YOUR VERSION>/bin/javaws" 1500

        sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/local/jdk<YOUR VERSION>/bin/javac" 1500

set variables permanent:
https://www.youtube.com/watch?v=NvAYH5Qu_YQ

    OBS.: Se não der pelo .bashrc, tente pelo .zshrc
    JAVA_HOME='/usr/local/jdk1.8.0_111'
    export JAVA_HOME
    PATH=$PATH:$JAVA_HOME/bin

(OPCIONAL) Netbeans+jdk :
    https://www.oracle.com/technetwork/pt/java/javase/downloads/jdk-netbeans-jsp-3413153-ptb.html


#Instale a versão mais recente do Eclipse:
https://www.eclipse.org/downloads/

#Instale o Spring Boot+Maven+Gradle:
https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started-installing-spring-boot.html

    Se instalou o Gradle pelo sdk então :
        export PATH=$PATH:~/.sdkman/candidates/gradle/5.4.1/bin


	Se fez git clone então :
		1º No diretório da pasta do cadastrar :
    		mvn build

            Obs.: Em caso de erro (Se persistir possivelmente é problema com JAVA_HOME, tente refazer os passos):
                sudo mvn build
                sudo mvn spring-boot:run

    		gradle build
    		gradle wrapper
    		./gradlew build --scan
	
	 para testar:
         ./gradlew bootRun
    
    2º No diretório da pasta do frontEnd : 
    	npm build
    
        para testar :
           	npm start

 Instale o Mysql & Workbench :

https://hostadvice.com/how-to/how-to-install-apache-mysql-php-on-an-ubuntu-18-04-vps/

https://www.linode.com/docs/databases/mysql/install-and-configure-mysql-workbench-on-ubuntu/

https://www.youtube.com/watch?v=VHKmD41jzEk

        Texto do video :
            Salve amigos, neste vídeo mostro como instalar o MySQL Server no novo Ubuntu 18.04, Mint 19 e derivados do novo Debian, Comandos:

            sudo apt install mysql-server
            sudo mysql_secure_installation
            Edite mysqld.cnf e mude bind-address para 0.0.0.0 com o comando:
            sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
            sudo service mysql restart
            sudo mysql -u root -p
            ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SuaSenha';

http://www.lamimdba.com.br/2018/04/dica-error-1819-hy000-your-password.html