// var h5Login = require('../../utils/h5Login.js');
// var log = require('../../utils/keplerReport.js').init();
var plugin = requirePlugin("myPlugin");
var log = plugin.log.init()
var app = getApp()
Page({
    data: {
        venderListUrl_h5: ''
    },
    onLoad: function (options) {
        console.log('options========', options)
        // let locUrlStr = 'https://md-mobile.jd.com/kepler/storeList?' 
        //                 + 'skuId='+ options.skuId 
        //                 +'&storeGroupId='+ options.storeGroupId 
        //                 +'&venderId='+ options.venderId 
        //                 +'&lng='+ options.lng 
        //                 +'&lat='+ options.lat 
        //                 +'&buyCount=' + options.buyCount
        //                 +'&returnPage=' + options.returnPage 
        //                 + '&un_area=1&tapFrom=' + options.tapFrom 
        //                 + decodeURIComponent(log.urlAddSeries(''));
        let locUrlStr = 'https://md-mobile.jd.com/addCart/list_kepler?' 
                        + 'wareId='+ options.skuId 
                        +'&storeGroupId='+ options.storeGroupId 
                        +'&venderId='+ options.venderId 
                        +'&lng='+ options.lng 
                        +'&lat='+ options.lat 
                        +'&buyCount=' + options.buyCount
                        + '&un_area=1&tapFrom=' + options.tapFrom 
                        +'&returnPage=' + options.returnPage 
                        + decodeURIComponent(log.urlAddSeries(''));
        console.log(locUrlStr)
        var _that = this;
        var newLocUrl = '';
				var	locUrl = encodeURIComponent(locUrlStr);
				
						// _that.setData({venderListUrl_h5:locUrlStr});	

        plugin.promiseGentoken().then(function(res){
            if(res.data.err_code==0){
                newLocUrl = res.data.url+'?to='+locUrl+'&tokenkey='+res.data.tokenkey;
                _that.setData({venderListUrl_h5:newLocUrl});
            }
        })
    },
    onShow: function () {

    }
})