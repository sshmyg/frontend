//Global variables
!process.env.NODE_ENV && (process.env.NODE_ENV = 'development');
global.isDev = process.env.NODE_ENV === 'development';

//Reg tasks
require('./tasks/server');
require('./tasks/json');
require('./tasks/jade');
require('./tasks/css');
require('./tasks/js');
require('./tasks/watch');
require('./tasks/clear');

//Task sequences 
require('./tasks/all');