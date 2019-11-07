This is wabench web application which executes tests in 3 environemnts:

 - wasi - src/bin/worker.rs
 - stdweb - src/bin/stdweb-worker.rs
 - main web app - src/bin/main.rs

# Application code structure

 - src/app.rs is the main web page
 - src/data/* contains messages structure, tests execution DB and its view representation
 - src/runner.rs is the yew agent which executes tests