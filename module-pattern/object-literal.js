var myModule = {
  myProperty: "someValue",
  myConfig: {
    useCaching: true,
    language: "en"
  },
  saySomething: function(){
    console.log("Where is Paul Irish?")
  },
  reportMyConfig: function(){
    console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"))
  },
  updateMyConfig: function(newConfig){
    if(typeof newConfig == "object"){
      this.myConfig = newConfig;
      console.log(this.myConfig.language)
    }
  }
}

myModule.saySomething()

myModule.reportMyConfig()

myModule.updateMyConfig({
  language: "fr",
  useCaching: false
})

myModule.reportMyConfig()
