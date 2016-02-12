module.export = function(grunt){
    grunt.registerTask('default',"log default stuff", function(){
        
        grunt.log.write('logging default stuff').ok();
        
        
    })
}