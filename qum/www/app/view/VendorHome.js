Ext.define('Qum.view.VendorHome', {
    extend: 'Ext.Panel',
    xtype: 'vhome',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
         items: [
            {
                     docked: 'top',
                    xtype: 'titlebar',
                    title: 'Employee Home'
                },
                {
                	xtype:'button',
                	id:'menubtn',
                	text:'Update Food Menu'

                },
                {
                	xtype:'button',
                	id:'dashbtn',
                	text:'Dashboard'

                }

                ]
            }
        
    
});