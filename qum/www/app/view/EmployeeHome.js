Ext.define('Qum.view.EmployeeHome', {
    extend: 'Ext.tab.Panel',
    xtype: 'ehome',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: true,
                items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Employee Home'
                },
                {
                	xtype:"container",
                	layout: "vbox",
                	items: [
                		{
                			xtype:"container",
                			layout:"hbox",
                			items:[
                			{
					            xtype:'button',
	                	        text: "FCS"
						    },
					        {
					            xtype:'button',
	                	        text: "Multiplex"
					        }
                			]
                		},
                		{
                			xtype:"container",
                			layout:"hbox",
                			items:[
                			{
					            xtype:'button',
	                	        text: "Laundromat"
						    },
					        {
					            xtype:'button',
	                	        text: "RC"
					        }
                			]
                		}
				    ]
                }
               ]
            },
            {
                title: '',
                iconCls: 'action',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    }
                ]
            }
        ]
    }
});
