define([
    'streamhub-metrics/views/metric-view',
    'inherits',
    "hgn!streamhub-hot-collections-icon-list-view/templates/icon-item"],
function (MetricView, inherits, IconItemTemplate) {

    var IconItemView = function (opts) {
        MetricView.apply(this, arguments);
        this.render();
    };
    inherits(IconItemView, MetricView);

    IconItemView.prototype.template = IconItemTemplate;
    IconItemView.prototype.elClass += ' hub-icon-item';

    return IconItemView;
});