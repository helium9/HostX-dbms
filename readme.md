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
#Clone the Repository and Install Dependencies
git clone https://github.com/helium9/HostX-dbms.git
cd HostX-dbms/server
npm install
cd ../client
npm install

##Usage
#Start Backend Server
Navigate to the server directory:

cd ../server
npm start

##Start Frontend Server
#Open a new terminal window, navigate to the client directory:

cd ../client
npm start

Visit http://localhost:3000 in your web browser to access the frontend.

