# 개발환경에서 서버는 도커환경의 mysql을 사용하고 운영환경에서 서버는 중요한 데이터를 다루는 만큼 안전한 AWS RDS를 이용한다.
# 데이터베이스를 생성하고 테이블을 만들기위해 /sqls/initialize.sql 파일을 이용하고, db에 한글 데이터를 넣으면 깨지는 현상을 방지하기 위해 my.cnf 파일을 이용한다.
FROM mysql:5.7

# 설정 파일을 컨테이너 속의 파일로 매핑시킴
ADD ./my.cnf /etc/mysql/conf.d/my.cnf