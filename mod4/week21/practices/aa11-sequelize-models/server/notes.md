# STEP 1: GENERATE MODEL AND MIGRATION FILES

npx sequelize model:generate --name color --attributes name:string

# STEP 2: MODIFY MIGRATION FILE

# STEP 3: MODIFY THE MODEL FILE

# STEP 4: RUN THE MIGRATION

npx dotenv sequelize-cli db:migrate
