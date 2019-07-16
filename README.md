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

  
Instale o Java, principalmente o Jre :
	https://sysadminwork.com/how-to-install-oracle-java-on-ubuntu-and-centos/

Instale a versão mais recente do Eclipse:
    https://www.eclipse.org/downloads/

Instale o Spring Boot+Maven+Gradle:
    https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started-installing-spring-boot.html


    Se instalou o Gradle e o Spring pelo sdk então :
        export PATH=$PATH:~/.sdkman/candidates/gradle/5.4.1/bin
        export PATH=$PATH:~/.sdkman/candidates/springboot/2.1.5.RELEASE/bin


	Se fez git clone então :
		1º No diretório da pasta do cadastrar :
    		mvn build

            Obs.: Em caso de erro :
                sudo mvn clean install -U -e
                mvn build

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

http://www.lamimdba.com.br/2018/04/dica-error-1819-hy000-your-password.html