require(["streamhub-hot-collections",
         "streamhub-hot-collections-icon-list-view/views/icon-list-view",
         "streamhub-hot-collections-icon-list-view/streams/collection-to-heat-metric-ext"],
function(HotCollections, IconListView, CollectionToHeatMetricExt) {
    var lvOpts = {
        "el": document.getElementById("hottest")
    };
    var iconListView = new IconListView(lvOpts);
        
    var hcOpts = {
        "network": "foxnewsprod.fyre.co",
        "siteId": "310349"
    };
    var hotCollections = new HotCollections(hcOpts);
    
    hotCollections._stream.pipe(new CollectionToHeatMetricExt()).pipe(iconListView);
});