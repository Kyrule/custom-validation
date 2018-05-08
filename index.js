// Validation error messages
var validationMsgs = {
    required: 'This field is mandatory.',
    nonalpha: 'Only Non Alphabetic Characters Allowed.',
    imageExtReq: 'Please enter image file with valid extension (either one of jpg, jpeg, gif, png, bmp or tif).',
    dateReq: 'Please enter date in dd MMM yyyy format.',
    dateValid: 'Date must point to existing calendar day.',
    timeReq: 'Please enter time in hh:mm format.',
    emailReq: 'Please enter a valid e-mail.',
    phoneRequired: 'Please enter phone number in correct format; it shall start with a "+", followed by digits. Space " " character is allowed as separator. The number cannot be longer than 20 chars.',
    cellPhoneRequired: 'Please enter mobile phone number in correct format; it shall start with a "+", followed by digits. Space " " character is allowed as separator. The number cannot be longer than 20 chars.',
    faxReq: 'Please enter your fax number in the correct format; it shall start with a "+", followed by digits. Space " " character is allowed as separator. The number cannot be longer than 20 chars.',
    predictedDateValid: 'Please set date less than 14 days from today.',
    pastDateValid: 'Please set past date before today.',
    notValidForSpot6: 'That value is not valid for Spot 6',
    countryReq: 'This field is mandatory. Please select a country from the list.',
    nameReq: 'This field is mandatory. Please enter your name.',
    surnameReq: 'This field is mandatory. Please enter your surname.',
    callReq: 'This field is mandatory. Please select the Call ID.',
    agencyRequired: 'This field is mandatory. Please select your agency.',
    organizationReq: 'This field is mandatory. Please enter your organization.',
    aapAtLeastOne: 'At least one acquisition is required.',
    aapAgencyReq: 'This field is mandatory. Please select an agency.',
    aapSattelliteReq: 'This field is mandatory. Please select a satellite from the list.',
    aapInstrumentReq: 'This field is mandatory. Please select an instrument from the list.',
    aapModeReq: 'This field is mandatory. Please select a mode from the list.',
    erfRequired: 'This field is mandatory. Please upload the ERF file.',
    pmAgencyReq: 'This field is mandatory. Please select the PM\'s agency or organization.',
    pmNameReq: 'This field is mandatory. Please enter the PM\'s name.',
    pmSurnameReq: 'This field is mandatory. Please enter the PM\'s surname.',
    productReq: 'This field is mandatory. Please append a product file.',
    metadataReq: 'This field is mandatory. Please append a metadata file.',
    productAreaReqDms: 'Please enter at least upper left and lower right pair of coordinates.<br/>Upper right and lower left pair is not mandatory.',
    productAreaReqLatDms: 'Latitude shall be between 0 degrees and 90 degrees.',
    productAreaReqLonDms: 'Longitude should be between 0 degrees and 180 degrees.',
    productAreaReqMinDms: 'The minutes shall be within 0 and 59.',
    productAreaReqSecDms: 'The seconds shall be within 0 and 59.',
    productAreaReqLatDec: 'Latitude shall be between -90 degrees and 90 degrees.',
    productAreaReqLonDec: 'Longitude should be between -180 degrees and 180 degrees.',
    productAreaReqDec: 'Please enter at least upper left and lower right pair of coordinates.<br/>Upper right and lower left pair is not mandatory.',
    quicklookReq: 'This field is mandatory. Please append a quicklook file.',
    thumbnailReq: 'This field is mandatory. Please append a thumbnail file.',
    mapPolyDec: 'Please enter at least 4 points. <b> First and last points should be identical to close the shape.</b> Each point shall be defined with a pair of coordinates, the first one representing the latitude, and the second one the longitude. The format of each coordinate should follow this example  45.02,&nbsp;-154.99.',
    mapPolyDms: 'Please enter at least 4 points. <b> First and last point should be identical to close the shape.</b> Each point shall be defined with a pair of coordinates, the first one representing the latitude, and the second point the longitude. The format of each coordinate should follow this example 45*02\'33.2\'N,&nbsp;154*59\'59.4\'W.',
    mapPriority: 'Priority value shall be greater or equal to 1;  1 is the highest priority',
    mapName: 'The area of interest name shall be unique.',
    mapLatDec: 'Latitude shall be between -90 degrees and 90 degrees. Please use the dot \'.\' as separator for the decimal coordinates (e.g. 52.3456).',
    mapLatDms: 'Latitude shall be 0 and 90 degrees. Please use a  star ( * )  to denote the degrees. The minutes shall be within 0 and 59. Please use an apostrophe ( \' ) to denote the minutes. Seconds shall be between 0.0, and a maximum of 59.9. Please use the double quotation mark ( \' ) to denote the seconds. Please enter \'N\' or \'S\' to note their direction from the equator. (e.g. 19*38\'33.3\'S).',
    mapLonDec: 'Longitude should be between -180 degrees and 180 degrees. Please use the dot \'.\' as separator for the decimal coordinates (e.g. 52.3456).',
    mapLonDms: 'Longitude shall be between 0 degrees and 180 degrees. The minutes shall be within 0 and 59. Please use an apostrophe ( \' ) to denote the minutes. Seconds shall be between 0.0, and a maximum of 59.9. Please use the double quotation mark ( \' ) to denote the seconds. Please enter \'E\' or \'W\' to note their direction from the 0 meridian. (e.g. 139*38\'33.3\'E).',
    mapRadius: 'Radius length shall be at least 3km.',
    disasterReq: 'Please select at least one type of disaster.',
    areaReq: 'At least one area shape must be marked on the map.',
    otherDisasterReq: 'Please specify disaster type in text field if Other checkbox is selected.'
};

window.validationMsgs = validationMsgs;

var monthsFull = {
    'January':'01',
    'February':'02',
    'March':'03',
    'April':'04',
    'May':'05',
    'June':'06',
    'July':'07',
    'August':'08',
    'September':'09',
    'October':'10',
    'November':'11',
    'December':'12'
};

var ignored = ':hidden:not(input[type="hidden"]),[readonly="readonly"]';
var ignoredNotHidden = ':not(:hidden)';
var validatedFormsQuery = '#default,#renderDirect,#acquisitionPlanUploadForm,#store,#erfUploadForm,#metadataUpload,#productUpload,' +
    '#callHandoverForm,#valueAddedProductForm,#generateList,form#generateList,form#swapWeeks';

var getMonthOnly = function(dateToday){
    return parseInt(((dateToday+'')).split(' ')[1]);
};
var getYearOnly = function(dateToday){
    return parseInt(((dateToday+'')).split(' ')[2]);
}
var getDayOnly = function(dateToday){
    return dateToday.getDate();
}
var getUserInputDayOnly = function(dated){
    return parseInt(dated.split(' ')[0]);
}


var isPastDays = function(gapDays) {
    return gapDays<0;
}

var getTodaysMonth = function(todaysDateTime){
    return todaysDateTime.getMonth()+1;
}

var getInputBoxMonth = function(dated){
    return getMonthOnly(dated);
}

var isOnSameDay = function(dayDateTime , userInputDate){
    if(dayDateTime instanceof Date) {
        return getUserInputDayOnly(userInputDate)===dayDateTime.getDate();
    }
    return false;
}

var isOnSameMonth = function(dayDateTime , userInputDate) {
    if(dayDateTime instanceof Date) {
        return getMonthOnly(userInputDate)===dayDateTime.getMonth()+1;
    }
    return false;
}

var isOnSameYear = function(dayDateTime , userInputDate) {
    if(dayDateTime instanceof Date) {
        return getYearOnly(userInputDate)===dayDateTime.getFullYear();
    }
    return false;
}


//function isOnSameMonth(todaysDateTime , userInputDate){
//  return getTodaysMonth(todaysDateTime)===getInputBoxMonth(userInputDate);
//}

var getTodaysYear = function(datedDateTime) {
    return datedDateTime.getYear()+1;
}

var getInputBoxYear = function(dated) {
    return getYearOnly(dated);
}

var isFutureYear = function(todaysDate , userInputDate){
    return getTodaysYear(todaysDate) < getInputBoxYear(userInputDate);
}

var isOnFutureMonth = function(todaysDate , userInputDate) {
    if(isFutureYear(todaysDate , userInputDate)) { return true; }
    return getTodaysMonth(todaysDate) < getInputBoxMonth(userInputDate);
}

var isOnPastMonth = function(todaysDate , userInputDate) {
    if( isFutureYear(todaysDate , userInputDate) ) { return false; }
    return getTodaysMonth(todaysDate)>getInputBoxMonth(userInputDate);
}

// var isValidFutureDate = function(userInputDate){
    // check radio Predicted selected
    //document.getElementById('default_form_approximateDateTime_predictOccurPredicted').checked
//  if(TYPE_PREDICTOCCUR_RADIO.PREDICTION_BUTTON.checked) {
//     var todaysDate=new Date();
//     if ( isOnPastMonth(todaysDate , userInputDate) ) { return false; }
//     if( isOnSameMonth(todaysDate , userInputDate) ) {
//         var dayOnlyUserInput = getUserInputDayOnly( userInputDate ) ,
//             dayOnlyToday = getDayOnly( todaysDate ) ,
//             gapDays = dayOnlyUserInput - dayOnlyToday ;
//         if(isPastDays(gapDays)) { return false; }
//         if(isNotBeyondTwoWeeks(gapDays)) {  return true; }
//         else { return false; }
//     }
//     if ( isOnFutureMonth(todaysDate , userInputDate) ) {
//         var dayOnlyUserInput = getUserInputDayOnly( userInputDate ) ,
//             lastDayMonth = getLastDayOfMonth(todaysDate) ,
//             dayOnlyToday = getDayOnly( todaysDate ) ,
//             initGapDays = lastDayMonth - dayOnlyToday ,
//             totalGapDays = initGapDays + dayOnlyUserInput;
//         if(totalGapDays<=TWO_WEEKS) { return true; }
//     }
//
//     return false;
// }

var isToday = function(dayDate, userInputDate){
    return isOnSameDay(dayDate , userInputDate)
        && isOnSameMonth(dayDate , userInputDate)
        && isOnSameYear(dayDate , userInputDate);
}


var isPastDaysSameMonth = function(todaysDate , userInputDate){
    if(isOnSameMonth(todaysDate , userInputDate)) {
        var dayOnlyUserInput = getUserInputDayOnly( userInputDate ) ,
            dayOnlyToday = getDayOnly( todaysDate ) ,
            gapDays = dayOnlyUserInput - dayOnlyToday ;
        if(isPastDays(gapDays)) { return true; }
    }
    return false;
}

var isOnSameMonthTodayOrPastDays = function(todaysDate , userInputDate){
    if(isToday(todaysDate, userInputDate)) { return true; }
    if(isPastDaysSameMonth(todaysDate , userInputDate)) { return true; }
    if ( isOnPastMonth(todaysDate , userInputDate) ) { return false; }
    return false;
}

var isValidOccurredDate = function(userInputDate) {
    return isOnSameMonthTodayOrPastDays(new Date() , userInputDate);
}

// prevent submit form on enter
// $(document).on('keypress', 'form', function(event) {
//     return event.keyCode != 13;
// });

var callWithNotIgnoredHidden = function(callback) {
    $('#default, #renderDirect').validate().settings.ignore = ignoredNotHidden;
    var res = callback();
    $('#default, #renderDirect').validate().settings.ignore = ignored;
    return res;
}

var validateDMS = function(coord, latlon){

    //clear white spaces
    coord = coord.replace(/ /g,'');
    var regEx;
    if(latlon === 'latitude'){
        regEx = coord.search(/^(\d{1,2}\*(\d{1,2}'(\d{1,2}(.\d+)?\")?)?[NS])/);
    }
    else{
        regEx = coord.search(/^(\d{1,3}\*(\d{1,2}'(\d{1,2}(.\d+)?\")?)?[WE])/);
    }
    if(regEx == -1){
        return false;
    }

    var degrees = parseInt(coord.split('*')[0]);
    var minutes = 0;
    var seconds = 0;
    var hasMinutes = coord.indexOf('\'') >= 0;
    if (hasMinutes) {
        minutes = parseInt(coord.split('*')[1].split('\'')[0]);
    }
    var hasSeconds = hasMinutes && coord.indexOf('\'') > 0;
    if (hasSeconds) {
        seconds = parseFloat(coord.split('*')[1].split('\'')[1].split('\'')[0]);
    }
    lastChar = coord[coord.length-1];
    if(latlon === 'latitude'){
        if(degrees > 90 || minutes >= 60 || seconds >= 60){
            return false;
        }
        if(degrees === 90 && (minutes !== 0 || seconds !== 0)){
            return false;
        }
    }
    else{
        if(degrees > 180 || minutes >= 60 || seconds >= 60){
            return false;
        }
        if(degrees === 180 && (minutes !== 0 || seconds !== 0)){
            return false;
        }
    }

    if(lastChar !== 'N' && lastChar !== 'S' && lastChar !== 'E' &&  lastChar !== 'W' && (degrees !== 0 || minutes !== 0 || seconds !== 0)){
        return false;
    }

    return true;
}

var validatePolygonDMS = function(coordinates){

    var valid = true;
    if(coordinates.length%2 !== 0){
        valid = false;
    }
    else if(coordinates.length < 8){
        valid = false;
    }
    else if(coordinates[0] !== coordinates[coordinates.length-2] || coordinates[1] !== coordinates[coordinates.length-1]){
        valid = false;
    }
    else{
        for(var i = 0; i < coordinates.length-1; i=i+2){
            if(!validateDMS(coordinates[i], 'latitude') || !validateDMS(coordinates[i+1], 'longitude')){
                valid = false;
                break;
            }

        }
    }
    return valid;
}

// map validation methods
var validatePolyDms = function(element) {
    var parent = $(element).parent().parent().parent().parent();
    var valid = true;
    var dms = $(parent).hasClass('dms');

    var coordinates = $(element).val().replace(/ /g,'').replace(/,\n/g,',').replace(/\n/g,',').split(',');
    if(dms === true){
        valid = validatePolygonDMS(coordinates);
    }
    return valid;
}

var validatePriority = function(element) {
    var newPriority = $(element).val();
    var layer_name = $(element).parent().parent().parent().attr('id');
    // var shape = layer_name.split('_')[0];
    var layer_id = layer_name.split('_')[1];
    var valid = window.validateLayerPriority(layer_id, newPriority);
    return valid;
}

var validateMapName = function(element) {
    var newName = $(element).val();
    var layer_name = $(element).parent().parent().parent().parent().attr('id');
    // var shape = layer_name.split('_')[0];
    var layer_id = layer_name.split('_')[1];
    var valid = window.validateLayerName(layer_id, newName);
    return valid;
}

var validateDecimal = function(coord, latlon){

    var parsedCoord = Number(coord);
    if(latlon === 'latitude'){
        if(isNaN(parsedCoord) || parsedCoord > 90 || parsedCoord < -90  ){
            return false;
        }
    }
    else{
        if(isNaN(parsedCoord) || parsedCoord > 180 || parsedCoord < -180  ){
            return false;
        }
    }

    return true;
}

var validateLatDms = function(element) {
    var parent = $(element).parent().parent().parent().parent();
    var valid = true;
    var dms = $(parent).hasClass('dms');

    if(dms === true){
        valid = validateDMS($(element).val(), 'latitude');
    }
    return valid;
}

var validateLatDec = function(element) {
    var parent = $(element).parent().parent().parent().parent();
    var valid = true;
    var dms = $(parent).hasClass('dms');

    if(dms !== true){
        valid = validateDecimal($(element).val(), 'latitude');
    }
    return valid;
}

var validateLonDms = function(element) {
    var parent = $(element).parent().parent().parent().parent();
    var valid = true;
    var dms = $(parent).hasClass('dms');

    if(dms === true){
        valid = validateDMS($(element).val(), 'longitude');
    }
    return valid;
}

var validateLonDec = function(element) {
    var parent = $(element).parent().parent().parent().parent();
    var valid = true;
    var dms = $(parent).hasClass('dms');

    if(dms !== true){
        valid = validateDecimal($(element).val(), 'longitude');
    }
    return valid;
}

var validateRadius = function(radius){
    var value = parseInt(radius);

    if(isNaN(value) || value < 3 ){
        return false;
    }
    return true;
}



var validatePolygonDecimal = function(coordinates){

    var valid = true;
    if(coordinates.length%2 !== 0){
        valid = false;
    }
    else if(coordinates.length < 8){
        valid = false;
    }
    else if(coordinates[0] !== coordinates[coordinates.length-2] || coordinates[1] !== coordinates[coordinates.length-1]){
        valid = false;
    }
    else{
        for(var i = 0; i < coordinates.length-1; i=i+2){
            if(!validateDecimal(coordinates[i], 'latitude') || !validateDecimal(coordinates[i+1], 'longitude')){
                valid = false;

                break;
            }

        }
    }
    return valid;
}

var validatePolyDec = function(element) {
    var parent = $(element).parent().parent().parent().parent();
    var valid = true;
    var dms = $(parent).hasClass('dms');

    var coordinates = $(element).val().replace(/ /g,'').replace(/,\n/g,',').replace(/\n/g,',').split(',');
    if(dms !== true) {
        valid = validatePolygonDecimal(coordinates);
    }
    return valid;
}

var addMethods = function() {
    jQuery.validator.addMethod('polydms', function(value, element) {
        return validatePolyDms(element);
    }, validationMsgs['mapPolyDms']);

    jQuery.validator.addMethod('polydec', function(value, element) {
        return validatePolyDec(element);
    }, validationMsgs['mapPolyDec']);

    jQuery.validator.addMethod('mapname', function(value, element) {
        return validateMapName(element);
    }, validationMsgs['mapName']);

    jQuery.validator.addMethod('latdec', function(value, element) {
        return validateLatDec(element);
    }, validationMsgs['mapLatDec']);
    jQuery.validator.addMethod('latdms', function(value, element) {
        return validateLatDms(element);
    }, validationMsgs['mapLatDms']);
    jQuery.validator.addMethod('londec', function(value, element) {
        return validateLonDec(element);
    }, validationMsgs['mapLonDec']);
    jQuery.validator.addMethod('londms', function(value, element) {
        return validateLonDms(element);
    }, validationMsgs['mapLonDms']);

    jQuery.validator.addMethod('minradius', function(value, element) {
        return validateRadius($(element).val());
    }, validationMsgs['mapRadius']);

    jQuery.validator.addMethod('calendar', function(value) {
        var bits = value.split(' ');
        var d = new Date(bits[2], monthsFull[bits[1]]-1, bits[0]);
        return !isNaN(Date.parse(d.toString())) && (d.getMonth() + 1) == monthsFull[bits[1]];
    }, validationMsgs['dateValid']);

    jQuery.validator.addMethod('nonalpha', function(value, element) {
        return this.optional(element) || !value.match(/[a-zA-Z]+/);
    }, validationMsgs['nonalpha']);

    jQuery.validator.addMethod('existsAny', function(value, element, options) {
        return $(options.itemSelector).length > 0;
    }, validationMsgs['aapAtLeastOne']);

    jQuery.validator.addMethod('phone', function (value, element) {
        return this.optional(element) || /^\+[0-9]+[ 0-9]+$/.test(value);
    }, validationMsgs['phoneRequired']);

    jQuery.validator.addMethod('cellPhone', function (value, element) {
        return this.optional(element) || /^\+[0-9]+[ 0-9]+$/.test(value);
    }, validationMsgs['cellPhoneRequired']);

    jQuery.validator.addMethod('fax', function (value, element) {
        return this.optional(element) || /^\+[0-9]+[ 0-9]+$/.test(value);
    }, validationMsgs['faxReq']);

    jQuery.validator.addMethod('laxEmail', function (value, element) {
        return this.optional(element) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9]{2}(?:[a-zA-Z0-9-]{0,60}[a-zA-Z0-9])?)+$/.test(value);
    }, validationMsgs['emailReq']);

    jQuery.validator.addMethod('requiredIfNotEmpty', function(value, element) {
        var noOptions = $(element).find('option').size() <= 1;
        var requiredNotEmpty = jQuery.validator.methods.required.call(this, value, element);
        return noOptions || requiredNotEmpty;
    }, validationMsgs['required']);

}

var convertToDecimal = function(){
    if($('#decimal_radio') !== null && $('#decimal_radio:checked').length === 0){
        $('#decimal_radio').prop('checked', true).trigger('change');
    }
}

var enableCheckbox = function() {
    $('input[type="checkbox"]').each(function(){
        this['disabled']= false;
    });
}

var showMapInputs = function(){
    $('#map_container2').hide();
    $('#manual_coordinates_form').show();
    $('#manual_coordinates_form').find('input').prop('disabled', false);
    $('.switch_area #manual').addClass('active');
    $('.switch_area #on_map').removeClass('active');
}

// Validation rules common for all forms.
var updateValidation = function(root) {
    root.find('.valid-scrn').not(ignored).each(function() { $(this).rules('add', {
        required: function() {
            return $('#kmlFiles').find('li').size() == 0;
        },
        extension: 'jpg|jpeg|gif|png|bmp|tif',
        messages: {
            required: validationMsgs['imageExtReq'],
            extension: validationMsgs['imageExtReq']
        }
    })});
    root.find('.valid-callid').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        messages: { required: validationMsgs['callReq'] }
    })});
    root.find('.valid-fax').not(ignored).each(function() { $(this).rules('add', {
        fax: true,
        maxlength: 20,
        required: false,
        messages: {
            required: validationMsgs['faxReq']
        }
    })});

    root.find('.valid-email').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        maxlength: 254,
        laxEmail: true,
        messages: {
            required: validationMsgs['emailReq'],
        }
    })});
    root.find('.valid-phone').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        phone: true,
        maxlength: 20,
        messages: {
            required: validationMsgs['phoneRequired']
        }
    })});
    root.find('.valid-phone-not-req').not(ignored).each(function() { $(this).rules('add', {
        required: false,
        phone: true,
        maxlength: 20,
        messages: {
            required: validationMsgs['phoneRequired'],
            phone: validationMsgs['phoneRequired']
        }
    })});
    root.find('.valid-mobile-phone').not(ignored).each(function() { $(this).rules('add', {
        cellPhone: true,
        maxlength: 20,
        required: false,
        messages: {
            required: validationMsgs['cellPhoneRequired']
        }
    })});

    root.find('.valid-date').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        pattern: /^[0-3]\d [a-zA-Z]+ \d\d\d\d$/,
        calendar: true,
        messages: {
            required : validationMsgs['dateReq'],
            pattern: validationMsgs['dateReq']
        }
    })});

    root.find('.valid-time').not(ignored).each(function() { $(this).rules('add', {
        required: false,
        pattern: /^[0-2]\d:[0-5]\d$/,
        messages: {
            required : validationMsgs['validTime'],
            pattern: validationMsgs['validTime']
        }
    })});

    root.find('.valid-required').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        messages: { required : 'This field is mandatory.' }
    })});

    root.find('.valid-number').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        number: true,
    })});
    root.find('.valid-num-pos').not(ignored).each(function() { $(this).rules('add', {
        number: true,
        min: 1
    })});
    root.find('.valid-num-natural').not(ignored).each(function() { $(this).rules('add', {
        number: true,
        min: 0
    })});

    root.find('.valid-week').not(ignored).each(function() { $(this).rules('add', {
        number: true,
        min: 1,
        max: 53
    })});
}

var initFormValidation = function() {
    // default messages
    jQuery.extend(jQuery.validator.messages, {
        required: 'This field is mandatory.'
    });

    addMethods();
    //
    // Validator Name rules and configuration
    //
    $(validatedFormsQuery).each(  function() {
        var form = $(this).validate({
            validClass: 'valid-field',
            errorClass: 'validation-error',
            ignore: ignored,
            // highlight copied from source and then modified
            highlight: function( element, errorClass, validClass ) {
                if ( element.type === 'radio' ) {
                    this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
                } else {
                    $( element ).addClass( errorClass ).removeClass( validClass );
                }
                if ($(element).attr('id') == 'form.typeOfDisasters-1') {
                    $(element).parent().addClass('validation-error');
                }

                var shareRow = $(element).parent().parent().parent().attr('class') &&
                    $(element).parent().parent().parent().attr('class').indexOf('one-row') != -1;
                if (shareRow) {
                    $(element).closest('.one-row').find('.warning[for="' + element.id + '"]').remove();
                } else {
                    $(element).closest('.wwgrp').find('.warning[for="' + element.id + '"]').remove();
                }
                // hide tooltip
                shareRow = $(element).closest('one-row', $(element).parent().parent().parent()).length;
                if (shareRow) {
                    $(element).parent().parent().parent().parent().find('.help').remove();
                } else {
                    $(element).parent().parent().parent().find('.help').remove();
                }
            },
            // unhighlight copied from source and then modified
            unhighlight: function( element, errorClass, validClass ) {
                if ( element.type === 'radio' ) {
                    this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
                } else {
                    $( element ).removeClass( errorClass ).addClass( validClass );
                    if (!element.value) {
                        $( element ).removeClass( validClass );
                    }
                    if ($(element).attr('id') == 'form.typeOfDisasters-1') {
                        $(element).parent().removeClass('validation-error');
                    }
                }
            },
            errorPlacement: function(error, element) {
                var errContainer;
                if (element.hasClass('single-err')) {
                    errContainer = element.parents('.single-err-parent').find('.put-err');
                    if (!errContainer.find('.validation-error:not(:hidden)').length) {
                        errContainer.append(error);
                    }
                } else if (element.attr('class') && element.attr('class').indexOf('valid-map') != -1) {
                    element.parent().append(error);
                } else if (element.parent().hasClass('form_row')) {
                    element.parents('.form_row').append(error);
                } else if (element.parent().hasClass('single_input')) {
                    // udp coordinates
                    errContainer = element.parent();
                    if (!errContainer.find('label.validation-error:visible').length) {
                        errContainer.append(error);
                    }
                } else {
                    // had to add because it is CRITICAL issue
                }


                if (element.parent().parent().parent().attr('class') &&
                    element.parent().parent().parent().attr('class').indexOf('one-row') != -1) {
                    // name and surname
                    element.parent().parent().parent().append(error);
                } else {
                    // the default error placement for the rest
                    element.parents('.wwgrp').append(error);

                }
            },
            submitHandler: function(submittedForm) {
                stopAutosave = true;
                enableCheckbox();
                convertToDecimal();
                submittedForm.submit();
            },
            rules: {
                'form.otherSpecify': {
                    required: '#form\\.typeOfDisasters-11:checked'
                },
                'form.eu.email': {
                    required:'#euEnabled:checked',
                    laxEmail: true
                },
                'form.eu.name': {
                    required:'#euEnabled:checked'
                },
                'form.eu.surname': {
                    required:'#euEnabled:checked'
                },
                'form.eu.organizationName': {
                    required:'#euEnabled:checked',
                },
                'form.eu.phone': {
                    required:'#euEnabled:checked',
                    phone: true
                },
                'form.eu.fax': {
                    phone: true
                },
                'form.eu.cellPhone': {
                    phone: true
                },
                // PM nomination
                'pmUser.organizationName': {
                    required: true,
                    maxlength: 300
                }
            },
            messages: {
                // URF if EU section active
                'form.otherSpecify': {
                    required: validationMsgs['otherDisasterReq'],
                },
                'form.eu.email': {
                    required: validationMsgs['emailReq']
                },
                'form.eu.name': {
                    required: validationMsgs['required']
                },
                'form.eu.surname': {
                    required: validationMsgs['required']
                },
                'form.eu.organizationName': {
                    required: validationMsgs['required']
                },
                'form.eu.phone': {
                    required: validationMsgs['phoneReq'],
                    phone: validationMsgs['phoneReq']
                }
            }
        });

        updateValidation($(form.currentForm));
    });

    // action before submit validation
    var origCheckForm = $.validator.prototype.checkForm;
    $.validator.prototype.checkForm = function() {

        // show map form only if there are errors
        if ($('form#default, form#renderDirect').length) {
            var anyShapeNotValid = callWithNotIgnoredHidden(function () {
                var anyNotValid = false;
                $('#coordinates_content input[class*="valid-map"], #manual_coordinates_form select').each (function() {
                    if (!$(this).valid()) {
                        anyNotValid = true;
                    }
                });
                return anyNotValid;
            });
            if (anyShapeNotValid) {
                showMapInputs();
            }
        }

        return origCheckForm.apply(this);
    };

    // validation on change instead of on focusout
    /*$('input.form_date, input.form_time, input[type="file"]:not(#screenshot)').change(function() {
        $(this).valid();
    });*/
}

var updateUrfEcoValidation = function(root) {
    //
    // Validation rules with messages
    //
    root.find('.valid-country').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        messages: { required: validationMsgs['countryReq'] }
    })});

    root.find('.valid-name').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        maxlength: 50,
        messages: { required: validationMsgs['nameReq'] }
    })});

    root.find('.valid-surname').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        maxlength: 70,
        messages: { required: validationMsgs['surnameReq'] }
    })});

    root.find('.valid-organization').not(ignored).each(function() { $(this).rules('add', {
        required: true,
        messages: {
            required: validationMsgs['organizationReq'],
            maxlength: validationMsgs['organizationReq']
        }
    })});

    root.find('#form\\.typeOfDisasters-1').not(ignored).each(function() { $(this).rules('add', {
        require_from_group: [1, 'input[name="form.typeOfDisasters"]'],
        messages: {
            require_from_group: validationMsgs['disasterReq']
        }
    })});
    root.find('#select_shape').each(function() {
        $(this).on('focusout',function(e){
            e.stopPropagation();
        });
        $(this).rules('add', {
            require_from_group: [1, '#coordinates_content .valid-map-name, #coordinates_content .valid-map-pri'],
            messages: {
                require_from_group: validationMsgs['areaReq']
            }
        })});


}

var showTooltip = function(clicked) {
    var input = $(clicked).prev();
    var shareRow = $(clicked).parent().parent().parent().attr('class') &&
        $(clicked).parent().parent().parent().attr('class').indexOf('one-row') != -1;
    var existed;
    if (shareRow) {
        existed = $(clicked.parentNode.parentNode.parentNode).find('.help');
    } else {
        existed = $(clicked.parentNode.parentNode).find('.help');
    }
    if (existed.length) {
        existed.remove();
    } else {
        var element = document.createElement('label');
        element.setAttribute('class', 'help');
        if (input.data('tooltip')) {
            var message = input.data('tooltip');
            element.innerHTML = message;
            if (shareRow) {
                // insert after one row
                $(clicked.parentNode.parentNode.parentNode).append(element);
            } else {
                $(element).insertAfter(clicked.parentNode);
            }
        }
    }
}


var setUpDateAndTime = function(template, params) {
    var dateInput = $(template).find('.form_date').first();
    if ( !dateInput.is('[readonly]') ) {
        var datePick = dateInput.datepicker({
            dateFormat: 'dd MM yy',
            changeMonth: true,
            changeYear: true,
        });
        if (params && params.date) {
            datePick.datepicker('setDate', '0');
        }
        $(template).find('.icon-calendar').on('click', function() {
            dateInput.datepicker('show');
        });
    }
    var timeInput = $(template).find('.form_time').first();
    if ( !timeInput.is('[readonly]') ) {
        if (params && params.time) {
            timeInput.wickedpicker({
                now: params.time,
                twentyFour: true,
                title: '',
            });
        } else {
            timeInput.wickedpicker({
                twentyFour: true,
                title: '',
            });
        }
        timeInput.removeClass('valid-field');
    }
}

//check if the date specified in the input is past or the same as today's date
var isPastOrPresent = function(dateInput) {

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    var inputDateArray = dateInput.split(' ');
    var inputDay = parseInt(inputDateArray[0]);
    var inputMonthIndex = monthNames.indexOf(inputDateArray[1]);
    var inputYear = parseInt(inputDateArray[2]);

    var startDate = new Date(inputYear, inputMonthIndex, inputDay);
    var oneDay = 1000 * 60 * 60 * 24;
    var diff = startDate - date;
    var dayDiff = Math.floor(diff / oneDay);

    if (dayDiff < 0 || (inputYear === year && inputMonthIndex === monthIndex && inputDay === day)) {
        return true;
    }
    else {
        return false;
    }
}

//check if the date specified in the input is maximum 14 days from today's date
var isNearFuture = function(dateInput) {

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    var inputDateArray = dateInput.split(' ');
    var inputDay = parseInt(inputDateArray[0]);
    var inputMonthIndex = monthNames.indexOf(inputDateArray[1]);
    var inputYear = parseInt(inputDateArray[2]);
    var endDate = new Date(inputYear, inputMonthIndex, inputDay);
    var oneDay = 1000 * 60 * 60 * 24;
    var diff = endDate - date;
    var dayDiff = Math.ceil(diff / oneDay);

    if ((dayDiff > 0 && dayDiff <= 14) || (inputYear === year && inputMonthIndex === monthIndex && inputDay === day)) {
        return true;
    }
    else {
        return false;
    }

}

var init = function() {
    // if ($(validatedFormsQuery).length) {
    initFormValidation();
    // }

    // yellow frame for changed prefilled fields.
    $('input.alterable, select.alterable').each (function() {
        var shareRow = $(this).parent().parent().parent().attr('class') &&
            $(this).parent().parent().parent().attr('class').indexOf('one-row') != -1;

        $(this).attr('data-initial', $(this).val());
        $(this).change(function() {
            var warningHolder = $(this).closest('.wwgrp');
            if (shareRow) {
                warningHolder = $(this).closest('.one-row');
            }

            var existingWarns = warningHolder.find('.warning[for="' + this.id + '"]');
            var isError = $(this.parentNode.parentNode).find('.validation-error:visible');
            if (isError.length) {
                $(this).removeClass('modified');
                existingWarns.remove();

            } else if ($(this).data('initial')) {
                if ($(this).val() && $(this).data('initial') != $(this).val()) {
                    $(this).addClass('modified');
                    if ($(this).data('modified') && !existingWarns.length) {
                        var message = $(this).data('modified');
                        var element = document.createElement('label');
                        element.setAttribute('class', 'warning');
                        element.setAttribute('for', this.id);
                        element.innerHTML = message;
                        warningHolder.append(element);
                    }
                } else {
                    $(this).removeClass('modified');
                    existingWarns.remove();
                }
            } else {
                // had to add because it is CRITICAL issue
            }
        });
    });

    // dialog handling
    $('.icon-info').click(function () {
        var dialogId = $(this).data('dialog-id');
        $('#' + dialogId).dialog({modal: true, resizable: false});
        return false;
    });
    $('.dialog-close-button').click(function(event) {
        event.preventDefault();
        $(this).parent().dialog('close');
    });
};

module.exports = init;
