Ext.define('Qum.view.Login', 
{
  extend:'Ext.Panel',
 xtype: 'Login',
 requires:['Ext.form.FieldSet','Ext.field.Password'],
config:
        {
        	items:
        	[
                      {                 
        					 xtype: 'fieldset',
                           title: 'Login Here',
                           instructions: '(* fields are mandatory)',
                           //height: 285,
                           items: 
                           [
                               {
                                   xtype: 'textfield',
                                   label: 'Name',
                                   required:true
                               },
                               {
                                   xtype: 'passwordfield',
                                   label: 'Password',
                                   required:true
                               }]
                           
                           
        	
        },
        {
        	xtype:'button',
        	height: 30,
                        width: '5',
                        //autoEl: {tag: 'center'}, 
                        text: 'Login here',
                        id:'Loginbutton',
                         handler: function()
                          {
                                    console.log("noe");
                                    //Ext.getCmp('Loginbutton').destroy();
                                   //var ehome= Ext.create("Qum.view.EmployeeHome"); 
                                   Ext.select('#Loginbutton').hide();
                                     Ext.Viewport.add({xtype:'vhome'}).show();
    								
                                   // Ext.Viewport.add({xtype:'ehome'});
                         }
                        

        }
        ]
}

}
)