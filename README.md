### <center> SSO login with WSO2 IS using angular5 web application <center>


#### prerequisite:

##### 1) Installation of JAVA

```
$ sudo yum install java-1.8.0-openjdk-devel
```


##### 2) Installation of WSO2 IS with KM (key manager)

```
$ sudo su
$ cd /opt
$ wget --user-agent="testuser" --referer="http://connect.wso2.com/wso2/getform/reg/new_product_download" \
http://product-dist.wso2.com/products/identity-server/5.3.0/wso2is-km-5.3.0.zip
$ unzip wso2is-km-5.3.0.zip
```


####  Start the Identity server

```
$  /opt/wso2is-km-5.3.0/bin/wso2server.sh start
```

####  Start the angular app

```
$ cd angualr2-oauth2-login
$ npm install
$ ng serve
```


####  Test SSO navigation

1) Hit the browser http://localhost:4200/login

2) Click on login -> it will get redirected to WSO2 IS login page

3) Enter the credentials to login admin/admin.

4) Login is successful, Home page is shown

