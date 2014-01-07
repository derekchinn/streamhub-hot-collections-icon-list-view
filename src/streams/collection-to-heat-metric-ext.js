define([
    'stream/transform',
    'inherits',
    'streamhub-hot-collections-icon-list-view/metrics/collection-heat-metric-ext'
], function (Transform, inherits, HeatMetricExt) {

    var CollectionToHeatMetricExt = function (opts) {
        Transform.apply(this, arguments);
    };
    inherits(CollectionToHeatMetricExt, Transform);

    CollectionToHeatMetricExt.prototype._transform = function (collection, done) {
        var metric = CollectionToHeatMetricExt.transform(collection);
        this.push(metric);
        done();
    };

    CollectionToHeatMetricExt.transform = function (collection) {
        var metric = new HeatMetricExt({
            collection: collection
        });
        return metric;
    };

    return CollectionToHeatMetricExt;
});