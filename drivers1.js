/**
 * again drivers 
 */
var device = ['console', 'display'];

function open(ele) {
    for(var n = 0; n < device.length; n++){
        if(driver[n].type === ele){
            driver[n].open()
            return n;
        }
    }
    console.log(`${ele} is not exit!`)
    return -1;
}

function read(fd){
    driver[fd].read();
}

function write(fd,content){
    driver[fd].write(content);
}

function close(fd){
    driver[fd].close();
}

var driver = [{
    type: 'console',

    open: function() {
        console.log('console is open');
    },

    read: function() {
        console.log('console is read');
    },

    write: function(content) {
        console.log(`${content} is write`);
    },

    close: function() {
        console.log('console is close');
    }
},{
    type: 'display',
    
        open: function() {
            console.log(`${this.type} is open`);
        },
    
        read: function() {
            console.log('display is read');
        },
    
        write: function(content) {
            console.log(`${content} is write`);
        },
    
        close: function() {
            console.log('display is close');
        }
}];


var fd = open('console');
if(fd >= 0){
    read(fd);
    write(fd,1);
    close(fd);
}

fd = open('c');
if(fd >= 0){
    read(fd);
    write(fd,'world');
    close(fd);
}

fd = open('display');
if(fd >= 0){
    read(fd);
    write(fd,'abc');
    close(fd);
}
