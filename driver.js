/**
 * 2017-9-15    Shi Ruitao
 */

var device = ['/dev/console', '/dev/display'];

function open(dev){
    var index = -1;
    index = device.indexOf(dev);

    if(index < 0){
        console.log(`${ dev } is not exit`); 
        return -1;
    }
    driver[index].open();

    return index;
}

function write(fd, content){
    driver[fd].write(content);
}

function read(fd){
    driver[fd].read();
}

function close(fd){
    driver[fd].close() ;
}

var driver = [{
    type: '/dev/console',
    open: function(){
        console.log(`console is open`);
        
    },

    write: function(content){
        console.log(`${content}`);
        
    },

    read: function(){
        console.log('console is read');
    },

    close: function(){
        console.log('console is close');
    },

},{
    type: '/dev/display',
    open: function(){
        console.log('display is open');
        
    },

    write: function(content){
        console.log(`${content}`);
        
    },

    read: function(){
        console.log('console is read');
    },

    close: function(){
        console.log('console is close');
    },

}]

var fd = open('/dev/consle');
if (fd >= 0) {
    write(fd,'hello');
    close(fd);
}

fd = open('/dev/display');
write(fd,'world');
close(fd);
