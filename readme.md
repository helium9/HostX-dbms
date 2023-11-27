# HostX-dbms

## First Time Usage

### Database Setup

1. Create a MySQL database named "hostx-dbms".
   - You can either create a new database with the same name or import it from the "Dump20231127" folder in SQL Workbench.

2. Store the database login credentials in a `.db_env` file in the following format:

   ```env
   DB_HOST="localhost"
   DB_USER='root'
   DB_PASSWORD='admin'
   DB_NAME='hostx-dbms'
