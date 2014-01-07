require.config({
	paths : {
		jquery : 'lib/jquery/jquery.min',
		base64: 'lib/base64/base64',
        hogan: 'lib/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
        hgn: 'lib/requirejs-hogan-plugin/hgn',
        json: 'lib/requirejs-plugins/src/json',
        jasmine: 'lib/jasmine/lib/jasmine-core/jasmine',
        'jasmine-html': 'lib/jasmine/lib/jasmine-core/jasmine-html',
        'jasmine-jquery': 'lib/jasmine-jquery/lib/jasmine-jquery',
        'event-emitter': 'lib/event-emitter/src/event-emitter',
        inherits: 'lib/inherits/inherits',
        text: 'lib/requirejs-text/text',
        requirejs: "lib/requirejs/require"
	},
	packages: [{
        name: "stream",
        location: "lib/stream/src"
    },{
        name: "streamhub-sdk",
        location: "lib/streamhub-sdk/src"
    },{
        name: "streamhub-sdk/auth",
        location: "lib/streamhub-sdk/src/auth"
    },{
        name: "streamhub-sdk/collection",
        location: "lib/streamhub-sdk/src/collection"
    },{
        name: "streamhub-sdk/content",
        location: "lib/streamhub-sdk/src/content"
    },{
        name: "streamhub-sdk/modal",
        location: "lib/streamhub-sdk/src/modal"
    },{
        name: "streamhub-hot-collections",
        location: "lib/streamhub-hot-collections/src"
    },{
        name: "streamhub-metrics",
        location: "lib/streamhub-metrics/src"
    },{
        name: "streamhub-hot-collections-icon-list-view",
        location: "./src"
    }],
	shim : {
		jquery : {
			exports : '$'
		}
	}
});
