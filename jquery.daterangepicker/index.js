/**
 * @author yongqingdong
 *
 * @require ./daterangepicker.css
 * @require ./index.css
 * @require ./jquery.daterangepicker.js
 *
 */


var dateRangeDefaultOptions = {
    // 使用中文
    language:       'cn',
    // Input间隔符
    separator:      ' 至 ',
    // 起始日
    startOfWeek:    'monday',
    // 选择后自动关闭
    autoClose:      false,
    // 选择一个日期
    singleDate:     false,
    // 显示工具栏
    showShortcuts:  true,
    // 默认选择后，显示Tooltip
    hoveringTooltip: true,
    // 月份是否必须是连续的
    stickyMonths:     false,
    // 快捷日期
    shortcuts:      {
        // 默认展示过去的日期
        'prev-days':    null,
        'prev':          null,
        'next-days':    null,
        'next':          null
    }
};

// 语言定制
$.dateRangePickerLanguages.cn = $.extend($.dateRangePickerLanguages.cn, {
    'past':          '',
    'Past':         '近',
    'Next':         '后',
    'following':    '',
    '近0天':         '今天',
    '近1天':         '昨天'
});

$.fn.daterange = function (options) {

    options = $.extend(true, {}, dateRangeDefaultOptions, options);

    return $(this).dateRangePicker(options);
};





