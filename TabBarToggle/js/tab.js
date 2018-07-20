(function (window) {
	function Tab(config) {
		this.tabMenus=null;
		this.tabMains=null;
		if (config) {
			this.init(config);
		}
	}

	Tab.prototype={
		init:function (config) {
			this.initElements(config);
			this.initEvent();
			if (config.auto) {
				this.autoPlay();
			}
		},

		initEvent:function () {
			for (var i = 0; i < this.tabMenus.length; i++) {
				var li=this.tabMenus[i];
				li.index=i;
				var obj=this;
				li.onclick=function () {
					Tab.change(obj,this)
				}
			}
		},

		initElements:function (config) {
			var tabMenu=document.getElementById(config.tabMenu);
			var tabMain=document.getElementById(config.tabMain);

			this.tabMains=tabMain.children;
			this.tabMenus=tabMenu.children;
		},

		change:function (element) {
			Tab.change(this,element);
		},

		autoPlay:function () {
			Tab.autoPlay(this);

		}
	}

	Tab.change=function (obj,element) {
		for (var i = 0; i < obj.tabMenus.length; i++) {
				obj.tabMenus[i].className='tab-item';
				obj.tabMains[i].style.display='none';
			}
			element.className+=' active';
			obj.tabMains[element.index].style.display='block';
	};

	Tab.autoPlay=function (obj) {
		var index=0;
		setInterval(function(){
			index++;
			if(index==obj.tabMenus.length){
				index=0;
			}
			Tab.change(obj,obj.tabMenus[index]);
		},2000)
	}
	
	window.Tab=Tab;

	console.log()
})(window);
