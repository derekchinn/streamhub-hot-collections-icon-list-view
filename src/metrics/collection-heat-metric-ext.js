define(['inherits', 'streamhub-hot-collections/metrics/collection-heat-metric'],
function (inherits, HeatMetric) {

    var HeatMetricExt = function (opts) {
        HeatMetric.apply(this, arguments);
    };
    inherits(HeatMetricExt, HeatMetric);
    
    HeatMetric.prototype.getCollectionId = function () {
        return this._collection.id;
    };

    return HeatMetricExt;
});