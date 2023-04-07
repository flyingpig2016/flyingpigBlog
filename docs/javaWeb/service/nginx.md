1. 查看80端口占用情况

   ```shell
    lsof -i:8080
   ```

   ![image-20230323145442171](/Users/flyingpig/Library/Application Support/typora-user-images/image-20230323145442171.png)

2. 查看nginx文件使用情况

   ```shell
    
   ```

3. 命令

   ```shell
   首先利用配置文件启动nginx
   
   命令: nginx -c /usr/local/nginx/conf/nginx.conf
   
   重启服务： service nginx restart
   
   快速停止或关闭Nginx：nginx -s stop
   
   正常停止或关闭Nginx：nginx -s quit
   
   配置文件修改重装载命令：nginx -s reload
   ```

   

4. 

