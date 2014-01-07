define([
    'streamhub-sdk/jquery',
    'inherits',
    'streamhub-sdk/views/list-view',
    'streamhub-hot-collections-icon-list-view/views/icon-item-view'],
function ($, inherits, ListView, IconItemView) {

    var IconListView = function (opts) {
        this._maxValue = 0;
        ListView.call(this, opts);
    };

    inherits(IconListView, ListView);

    IconListView.prototype.elClass += ' hub-icon-list';

    IconListView.prototype.comparator = function (a, b) {
        return b.metric.getValue - a.metric.getValue();
    };

    IconListView.prototype.add = function (metric) {
        var value = metric.getValue(),
            iconItemView = this._createMetricView(metric);

        if (value > this._maxValue) {
            this._setMaxValue(value);
        }

        ListView.prototype.add.call(this, iconItemView);
    };

    IconListView.prototype._createMetricView = function (metric) {
        var self = this;

        var iconItemView = new IconItemView({
            metric: metric
        });

        return iconItemView;
    };

    IconListView.prototype._setMaxValue = function (value) {
        this._maxValue = value;
    };

    return IconListView;
});