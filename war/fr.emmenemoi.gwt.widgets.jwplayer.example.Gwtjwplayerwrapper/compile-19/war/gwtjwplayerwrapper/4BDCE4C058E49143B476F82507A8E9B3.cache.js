var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.gwtjwplayerwrapper;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.6.0";
var $strongName = '4BDCE4C058E49143B476F82507A8E9B3';
var $doc = $wnd.document;function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var _, P337263f96de26943_longLit = {l:2255171, m:1041847, h:210726}, seedTable = {}, Q$Object = 0, Q$String = 1, Q$AnimationScheduler$AnimationHandle = 2, Q$AnimationSchedulerImpl = 3, Q$AnimationSchedulerImplTimer$AnimationHandleImpl = 4, Q$AnimationSchedulerImplTimer$AnimationHandleImpl_$1 = 5, Q$AriaAttributeType = 6, Q$CodeDownloadException$Reason = 7, Q$JavaScriptException = 8, Q$Style$Display = 9, Q$Style$HasCssName = 10, Q$Style$Overflow = 11, Q$Style$Position = 12, Q$Style$TextAlign = 13, Q$Style$Unit = 14, Q$Style$Visibility = 15, Q$ClickHandler = 16, Q$DomEvent$Type = 17, Q$KeyUpHandler = 18, Q$AttachEvent$Handler = 19, Q$CloseHandler = 20, Q$HasAttachHandlers = 21, Q$ResizeHandler = 22, Q$ValueChangeHandler = 23, Q$EventHandler = 24, Q$HasHandlers = 25, Q$HasDirection$Direction = 26, Q$LongLibBase$LongEmul = 27, Q$Layout$Alignment = 28, Q$Layout$Layer = 29, Q$DocumentModeAsserter$Severity = 30, Q$EventListener = 31, Q$Window$ClosingHandler = 32, Q$HasHorizontalAlignment$HorizontalAlignmentConstant = 33, Q$HasVisibility = 34, Q$HasWidgets = 35, Q$IsWidget = 36, Q$RequiresResize = 37, Q$RootPanel = 38, Q$UIObject = 39, Q$ValueBoxBase$TextAlignment = 40, Q$Widget = 41, Q$FocusImplStandard = 42, Q$HandlerRegistration = 43, Q$SimpleEventBus = 44, Q$SimpleEventBus$Command = 45, Q$UmbrellaException = 46, Q$DefaultClientActionHandlerRegistry = 47, Q$DelayedBind = 48, Q$HasHandlerContainer = 49, Q$PopupView = 50, Q$Presenter = 51, Q$PresenterWidget = 52, Q$PresenterWidget$HandlerInformation = 53, Q$RootPresenter$RootView = 54, Q$AsyncCallStartHandler = 55, Q$AsyncCallSucceedHandler = 56, Q$LockInteractionHandler = 57, Q$NavigationHandler = 58, Q$NavigationRefusedHandler = 59, Q$NotifyingAsyncCallback$State = 60, Q$Place = 61, Q$PlaceRequest = 62, Q$PlaceRequestInternalHandler = 63, Q$ResetPresentersHandler = 64, Q$RevealContentHandler = 65, Q$RevealRootContentHandler = 66, Q$RevealRootLayoutContentHandler = 67, Q$RevealRootPopupContentHandler = 68, Q$TokenFormatException = 69, Q$JWPlayer = 70, Q$JWPlayerEvent$JWPlayerEventHandler = 71, Q$JWPlayerOptions$JWPlayerPlaylistSource = 72, Q$JWPlayerOptions$JWPlayerPlaylistSource_$1 = 73, Q$MainPagePresenter$MyProxy = 74, Q$MainPagePresenter$MyView = 75, Q$ClientGinjector = 76, Q$Serializable = 77, Q$Boolean = 78, Q$CharSequence = 79, Q$Comparable = 80, Q$Enum = 81, Q$Exception = 82, Q$Integer = 83, Q$Number = 84, Q$StackTraceElement = 85, Q$Throwable = 86, Q$Void = 87, Q$ParseException = 88, Q$LinkedHashMap$ChainEntry = 89, Q$List = 90, Q$Map = 91, Q$Map$Entry = 92, Q$Set = 93, CM$ = {};
function newSeed(id_0){
  return new seedTable[id_0];
}

function defineSeed(id_0, superSeed, castableTypeMap){
  var seed = seedTable[id_0];
  if (seed && !seed.___clazz$) {
    _ = seed.prototype;
  }
   else {
    if (!seed) {
      seed = seedTable[id_0] = function(){
      }
      ;
    }
    _ = seed.prototype = superSeed < 0?{}:newSeed(superSeed);
    _.castableTypeMap$ = castableTypeMap;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  if (seed.___clazz$) {
    _.___clazz$ = seed.___clazz$;
    seed.___clazz$ = null;
  }
}

function $$init_108(){
}

function $clinit_SeedUtil(){
}

function makeCastMap(a){
  var result = {};
  for (var i = 0, c = a.length; i < c; ++i) {
    result[a[i]] = 1;
  }
  return result;
}

function nullMethod(){
}

function $$init(){
}

function $equals(this$static, other){
  return this$static === other;
}

function $hashCode(this$static){
  return getHashCode(this$static);
}

function Object_1(){
  $$init();
}

defineSeed(1, -1, CM$, Object_1);
_.equals$ = function equals(other){
  return $equals(this, other);
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return $hashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName_0(this.___clazz$) + '@' + toHexString(this.hashCode$());
}
;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
function $$init_0(this$static){
  this$static.callback = new Animation$1_0(this$static);
}

function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (isNotNull(this$static.requestHandle)) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.onCancel();
}

function $interpolate(progress){
  return (1 + cos_0(3.141592653589793 + progress * 3.141592653589793)) / 2;
}

function $isRunning(this$static, curRunId){
  return this$static.isRunning && this$static.runId == curRunId;
}

function $onStart(this$static){
  this$static.onUpdate($interpolate(0));
}

function $run(this$static, duration, startTime, element){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = element;
  ++this$static.runId;
  this$static.callback.execute(currentTimeMillis());
}

function $run_0(this$static, duration, element){
  $run(this$static, duration, currentTimeMillis(), element);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate($interpolate(progress));
    return $isRunning(this$static, curRunId);
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    $onStart(this$static);
    if (!$isRunning(this$static, curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation_0(){
  Animation_1.call(this, get_0());
}

function Animation_1(scheduler){
  Object_1.call(this);
  $$init_0(this);
  this.scheduler = scheduler;
}

defineSeed(3, 1, {});
_.onCancel = function onCancel(){
  this.wasStarted && this.onComplete();
}
;
_.onComplete = function onComplete(){
  this.onUpdate($interpolate(1));
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
function $$init_1(){
}

function Animation$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_1();
}

defineSeed(4, 1, {}, Animation$1_0);
_.execute = function execute(timestamp){
  $update(this.this$0, timestamp)?(this.this$0.requestHandle = this.this$0.scheduler.requestAnimationFrame(this.this$0.callback, this.this$0.element)):(this.this$0.requestHandle = null);
}
;
function $$init_2(){
}

function AnimationScheduler_0(){
  Object_1.call(this);
  $$init_2();
}

function get_0(){
  return $clinit_AnimationSchedulerImpl() , INSTANCE;
}

defineSeed(5, 1, {});
function $$init_3(){
}

function AnimationScheduler$AnimationHandle_0(){
  Object_1.call(this);
  $$init_3();
}

defineSeed(6, 1, makeCastMap([Q$AnimationScheduler$AnimationHandle]));
function $clinit_AnimationSchedulerImpl(){
  $clinit_AnimationSchedulerImpl = nullMethod;
  var impl;
  {
    impl = new AnimationSchedulerImplWebkit_0;
    instanceOf(impl, Q$AnimationSchedulerImpl) && (dynamicCast(impl, Q$AnimationSchedulerImpl).isNativelySupported() || (impl = new AnimationSchedulerImplTimer_0));
    INSTANCE = impl;
  }
}

function $$init_4(){
}

function AnimationSchedulerImpl_0(){
  AnimationScheduler_0.call(this);
  $$init_4();
}

defineSeed(7, 5, makeCastMap([Q$AnimationSchedulerImpl]));
var INSTANCE;
function $$init_5(this$static){
  this$static.animationRequests = new ArrayList_0;
  this$static.timer = new AnimationSchedulerImplTimer$1_0(this$static);
}

function $cancelAnimationFrame(this$static, requestId){
  this$static.animationRequests.remove_2(requestId);
  this$static.animationRequests.size_1() == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$array, requestId$index, requestId$max;
  curAnimations = initDim(_3Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, makeCastMap([Q$AnimationSchedulerImplTimer$AnimationHandleImpl_$1, Q$Serializable]), Q$AnimationSchedulerImplTimer$AnimationHandleImpl, this$static.animationRequests.size_1(), 0);
  curAnimations = dynamicCast(this$static.animationRequests.toArray_0(curAnimations), Q$AnimationSchedulerImplTimer$AnimationHandleImpl_$1);
  duration = new Duration_0;
  for (requestId$array = curAnimations , requestId$index = 0 , requestId$max = requestId$array.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = requestId$array[requestId$index];
    this$static.animationRequests.remove_2(requestId);
    $getCallback(requestId).execute($getStartMillis(duration));
  }
  this$static.animationRequests.size_1() > 0 && $schedule(this$static.timer, max_0(5, 16 - $elapsedMillis(duration)));
}

function AnimationSchedulerImplTimer_0(){
  AnimationSchedulerImpl_0.call(this);
  $$init_5(this);
}

defineSeed(8, 7, makeCastMap([Q$AnimationSchedulerImpl]), AnimationSchedulerImplTimer_0);
_.isNativelySupported = function isNativelySupported(){
  return true;
}
;
_.requestAnimationFrame = function requestAnimationFrame(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl_0(this, callback);
  this.animationRequests.add_1(requestId);
  this.animationRequests.size_1() == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
function $$init_6(this$static){
}

function $cancel_0(this$static){
  if (!$isRunning_0(this$static)) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0($intValue(this$static.timerId)):clearTimeout_0($intValue(this$static.timerId));
  this$static.timerId = null;
}

function $isRunning_0(this$static){
  return isNotNull(this$static.timerId);
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  $isRunning_0(this$static) && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_13(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer_0(){
  Object_1.call(this);
  $$init_6(this);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

defineSeed(10, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
function $$init_7(){
}

function AnimationSchedulerImplTimer$1_0(this$0){
  this.this$0 = this$0;
  Timer_0.call(this);
  $$init_7();
}

defineSeed(9, 10, {}, AnimationSchedulerImplTimer$1_0);
_.run = function run(){
  $updateAnimations(this.this$0);
}
;
function $$init_8(){
}

function $getCallback(this$static){
  return this$static.callback;
}

function AnimationSchedulerImplTimer$AnimationHandleImpl_0(this$0, callback){
  this.this$0 = this$0;
  AnimationScheduler$AnimationHandle_0.call(this);
  $$init_8();
  this.callback = callback;
}

defineSeed(11, 6, makeCastMap([Q$AnimationScheduler$AnimationHandle, Q$AnimationSchedulerImplTimer$AnimationHandleImpl]), AnimationSchedulerImplTimer$AnimationHandleImpl_0);
_.cancel = function cancel(){
  $cancelAnimationFrame(this.this$0, this);
}
;
function $$init_9(){
}

function $cancelAnimationFrameImpl(requestId){
  $wnd.webkitCancelRequestAnimationFrame(requestId);
}

function $requestAnimationFrameImpl(callback, element){
  var _callback = callback;
  var wrapper = $entry(function(){
    var now_0 = currentTimeMillis();
    _callback.execute(now_0);
  }
  );
  return $wnd.webkitRequestAnimationFrame(wrapper, element);
}

function AnimationSchedulerImplWebkit_0(){
  AnimationSchedulerImpl_0.call(this);
  $$init_9();
}

defineSeed(12, 7, makeCastMap([Q$AnimationSchedulerImpl]), AnimationSchedulerImplWebkit_0);
_.isNativelySupported = function isNativelySupported_0(){
  return !!($wnd.webkitRequestAnimationFrame && $wnd.webkitCancelRequestAnimationFrame);
}
;
_.requestAnimationFrame = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = $requestAnimationFrameImpl(callback, element);
  return new AnimationSchedulerImplWebkit$AnimationHandleImpl_0(this, requestId);
}
;
function $$init_10(){
}

function AnimationSchedulerImplWebkit$AnimationHandleImpl_0(this$0, requestId){
  this , this$0;
  AnimationScheduler$AnimationHandle_0.call(this);
  $$init_10();
  this.requestId = requestId;
}

defineSeed(13, 6, makeCastMap([Q$AnimationScheduler$AnimationHandle]), AnimationSchedulerImplWebkit$AnimationHandleImpl_0);
_.cancel = function cancel_0(){
  $cancelAnimationFrameImpl(this.requestId);
}
;
_.requestId = 0;
function $$init_11(){
}

function $getAriaValue(this$static, value_0){
  var buf, item_0, item$array, item$index, item$max;
  buf = new StringBuffer_0;
  for (item$array = value_0 , item$index = 0 , item$max = item$array.length; item$index < item$max; ++item$index) {
    item_0 = item$array[item$index];
    $append($append(buf, this$static.getSingleValue(item_0)), ' ');
  }
  return $trim($toString_1(buf));
}

function $set(this$static, element, values){
  if (isNull(element)) {
    debugger;
    throw makeAssertionError_Object('Element cannot be null.');
  }
  if (values.length <= 0) {
    debugger;
    throw makeAssertionError();
  }
  $setAttribute(element, this$static.name_0, $getAriaValue(this$static, values));
}

function Attribute_0(name_0, defaultValue){
  Object_1.call(this);
  $$init_11();
  if (jsEquals(name_0, null)) {
    debugger;
    throw makeAssertionError_Object('Name cannot be null');
  }
  this.name_0 = name_0;
  this , defaultValue;
}

defineSeed(15, 1, {});
function $$init_12(){
}

function $getSingleValue(){
  return null.nullMethod();
}

function AriaValueAttribute_0(name_0, defaultValue){
  Attribute_0.call(this, name_0, defaultValue);
  $$init_12();
}

defineSeed(14, 15, {}, AriaValueAttribute_0);
_.getSingleValue = function getSingleValue(value_0){
  return $getSingleValue(dynamicCast(value_0, Q$AriaAttributeType));
}
;
function $$init_13(){
}

function PrimitiveValueAttribute_0(name_0, defaultValue){
  Attribute_0.call(this, name_0, defaultValue);
  $$init_13();
}

defineSeed(16, 15, {}, PrimitiveValueAttribute_0);
_.getSingleValue = function getSingleValue_0(value_0){
  return valueOf_16(value_0);
}
;
function $clinit_State(){
  $clinit_State = nullMethod;
  new PrimitiveValueAttribute_0('aria-busy', 'false');
  new AriaValueAttribute_0('aria-checked', 'undefined');
  new PrimitiveValueAttribute_0('aria-disabled', 'false');
  new AriaValueAttribute_0('aria-expanded', 'undefined');
  new AriaValueAttribute_0('aria-grabbed', 'undefined');
  HIDDEN = new PrimitiveValueAttribute_0('aria-hidden', 'false');
  new AriaValueAttribute_0('aria-invalid', 'false');
  new AriaValueAttribute_0('aria-pressed', 'undefined');
  new AriaValueAttribute_0('aria-selected', 'undefined');
}

var HIDDEN;
function $$init_14(){
}

function $fillInStackTrace(this$static){
  fillInStackTrace(this$static);
  return this$static;
}

function $getCause(this$static){
  return this$static.cause;
}

function $getStackTrace(this$static){
  if (jsEquals(this$static.stackTrace, null)) {
    return initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, 0, 0);
  }
  return this$static.stackTrace;
}

function $setStackTrace(this$static, stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (isNull(stackTrace[i])) {
      throw new NullPointerException_0;
    }
    copy[i] = stackTrace[i];
  }
  this$static.stackTrace = copy;
}

function $toString(this$static){
  var className, msg;
  className = $getName_0(this$static.___clazz$);
  msg = this$static.getMessage();
  return jsNotEquals(msg, null)?className + ': ' + msg:className;
}

function Throwable_0(){
  Object_1.call(this);
  $$init_14();
  $fillInStackTrace(this);
}

function Throwable_1(message){
  Object_1.call(this);
  $$init_14();
  this.detailMessage = message;
  $fillInStackTrace(this);
}

function Throwable_2(message, cause){
  Object_1.call(this);
  $$init_14();
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineSeed(21, 1, makeCastMap([Q$Serializable, Q$Throwable]));
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  return $toString(this);
}
;
function $$init_15(){
}

function Exception_0(){
  Throwable_0.call(this);
  $$init_15();
}

function Exception_1(message){
  Throwable_1.call(this, message);
  $$init_15();
}

function Exception_2(message, cause){
  Throwable_2.call(this, message, cause);
  $$init_15();
}

defineSeed(20, 21, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]));
function $$init_16(){
}

function RuntimeException_0(){
  Exception_0.call(this);
  $$init_16();
}

function RuntimeException_1(message){
  Exception_1.call(this, message);
  $$init_16();
}

function RuntimeException_2(message, cause){
  Exception_2.call(this, message, cause);
  $$init_16();
}

defineSeed(19, 20, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), RuntimeException_1);
function $$init_17(){
}

function CodeDownloadException_0(message){
  RuntimeException_1.call(this, message);
  $$init_17();
  this , ($clinit_CodeDownloadException$Reason() , TERMINATED);
}

defineSeed(18, 19, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), CodeDownloadException_0);
function $$init_18(){
}

function $name(this$static){
  return this$static.name_0;
}

function $ordinal(this$static){
  return this$static.ordinal;
}

function Enum_0(name_0, ordinal){
  Object_1.call(this);
  $$init_18();
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

function createValueOfMap(enumConstants){
  var result, value_0, value$array, value$index, value$max;
  result = createObject();
  for (value$array = enumConstants , value$index = 0 , value$max = value$array.length; value$index < value$max; ++value$index) {
    value_0 = value$array[value$index];
    put0(result, ':' + $name(value_0), value_0);
  }
  return result;
}

function get0(map_0, name_0){
  return map_0[name_0];
}

function put0(map_0, name_0, value_0){
  map_0[name_0] = value_0;
}

function valueOf(map_0, name_0){
  var result;
  result = get0(map_0, ':' + name_0);
  if (isNotNull(result)) {
    return result;
  }
  if (jsEquals(name_0, null)) {
    throw new NullPointerException_0;
  }
  throw new IllegalArgumentException_0('Enum constant undefined: ' + name_0);
}

defineSeed(23, 1, makeCastMap([Q$Serializable, Q$Comparable, Q$Enum]));
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return $hashCode(this);
}
;
_.toString$ = function toString_2(){
  return $name(this);
}
;
_.ordinal = 0;
function $clinit_CodeDownloadException$Reason(){
  $clinit_CodeDownloadException$Reason = nullMethod;
  TERMINATED = new CodeDownloadException$Reason_0('TERMINATED', 0);
  $VALUES = initValues(_3Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit, makeCastMap([Q$Serializable]), Q$CodeDownloadException$Reason, [TERMINATED]);
}

function $$init_19(){
}

function CodeDownloadException$Reason_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_19();
}

function valueOf_0(name_0){
  $clinit_CodeDownloadException$Reason();
  return valueOf(($clinit_CodeDownloadException$Reason$Map() , $MAP), name_0);
}

function values_0(){
  $clinit_CodeDownloadException$Reason();
  return $VALUES;
}

defineSeed(22, 23, makeCastMap([Q$CodeDownloadException$Reason, Q$Serializable, Q$Comparable, Q$Enum]), CodeDownloadException$Reason_0);
var $VALUES, TERMINATED;
function $clinit_CodeDownloadException$Reason$Map(){
  $clinit_CodeDownloadException$Reason$Map = nullMethod;
  $MAP = createValueOfMap(($clinit_CodeDownloadException$Reason() , $VALUES));
}

var $MAP;
function $$init_20(this$static){
  this$static.start_0 = currentTimeMillis();
}

function $elapsedMillis(this$static){
  return uncheckedConversion(currentTimeMillis() - this$static.start_0);
}

function $getStartMillis(this$static){
  return this$static.start_0;
}

function Duration_0(){
  Object_1.call(this);
  $$init_20(this);
}

function currentTimeMillis(){
  return (new Date).getTime();
}

function uncheckedConversion(elapsed){
  return elapsed;
}

defineSeed(25, 1, {}, Duration_0);
_.start_0 = 0;
function getUncaughtExceptionHandler(){
  return null;
}

function isClient(){
  return true;
}

function isScript(){
  return true;
}

function log_0(message){
  log_3(message);
}

function reportUncaughtException(e){
  reportUncaughtException_0(e);
}

function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = nullMethod;
  NOT_SET = new Object_1;
}

function $$init_21(this$static){
  this$static.description = '';
}

function $ensureInit(this$static){
  var exception;
  if (jsEquals(this$static.message_0, null)) {
    exception = $getThrown(this$static);
    this$static.name_0 = getExceptionName(exception);
    this$static.description = this$static.description + ': ' + getExceptionDescription(exception);
    this$static.message_0 = '(' + this$static.name_0 + ') ' + getExceptionProperties(exception) + this$static.description;
  }
}

function $getThrown(this$static){
  return maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
}

function $isThrownSet(this$static){
  return maskUndefined(this$static.e) !== maskUndefined(NOT_SET);
}

function JavaScriptException_0(e){
  $clinit_JavaScriptException();
  JavaScriptException_1.call(this, e, '');
}

function JavaScriptException_1(e, description){
  RuntimeException_0.call(this);
  $$init_21(this);
  this.e = e;
  this.description = description;
  createStackTrace_0(this);
}

function getExceptionDescription(e){
  return instanceOfJso(e)?getExceptionDescription0(dynamicCastJso(e)):e + '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName(e){
  return jsEquals(e, null)?'null':instanceOfJso(e)?getExceptionName0(dynamicCastJso(e)):instanceOf(e, Q$String)?'String':$getName_0(getClass__devirtual$(e));
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

function getExceptionProperties(e){
  return instanceOfJso(e)?getProperties(dynamicCastJso(e)):'';
}

defineSeed(27, 19, makeCastMap([Q$JavaScriptException, Q$Serializable, Q$Exception, Q$Throwable]), JavaScriptException_0);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return $getThrown(this);
}
;
var NOT_SET;
function $cast(this$static){
  return this$static;
}

function $equals_0(this$static, other){
  return $equals(this$static, other);
}

function $getClass(){
  return Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function $hashCode_0(this$static){
  return getHashCode(this$static);
}

function createArray(){
  return [];
}

function createObject(){
  return {};
}

function equals__devirtual$(this$static, other){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.equals$(other):$equals_0(maybeJsoInvocation, other);
}

function getClass__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.___clazz$:$getClass();
}

function getOldState__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.getOldState():$getOldState_0(maybeJsoInvocation);
}

function hashCode__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.hashCode$():$hashCode_0(maybeJsoInvocation);
}

function toStringSimple(obj){
  return obj.toString?obj.toString():'[JavaScriptObject]';
}

function toStringVerbose(obj){
  var defined = function(m_0){
    return typeof m_0 != 'undefined';
  }
  ;
  var strip = function(s){
    return s.replace(/\r\n/g, '');
  }
  ;
  if (defined(obj.outerHTML))
    return strip(obj.outerHTML);
  if (defined(obj.innerHTML) && obj.cloneNode) {
    $doc.createElement('div').appendChild(obj.cloneNode(true)).innerHTML;
  }
  if (defined(obj.nodeType) && obj.nodeType == 3) {
    return "'" + obj.data.replace(/ /g, '\u25AB').replace(/\u00A0/, '\u25AA') + "'";
  }
  if (typeof defined(obj.htmlText) && obj.collapse) {
    var html = obj.htmlText;
    if (html) {
      return 'IETextRange [' + strip(html) + ']';
    }
     else {
      var dup = obj.duplicate();
      dup.pasteHTML('|');
      var out = 'IETextRange ' + strip(obj.parentElement().outerHTML);
      dup.moveStart('character', -1);
      dup.pasteHTML('');
      return out;
    }
  }
  return obj.toString?obj.toString():'[JavaScriptObject]';
}

function $get(this$static, index_0){
  return this$static[index_0];
}

function $length(this$static){
  return this$static.length;
}

function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $set_0(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

function $get_0(this$static, index_0){
  return this$static[index_0];
}

function $length_0(this$static){
  return this$static.length;
}

function $set_1(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

function $$init_22(){
}

function Scheduler_0(){
  Object_1.call(this);
  $$init_22();
}

function get_1(){
  return $clinit_SchedulerImpl() , INSTANCE_0;
}

defineSeed(31, 1, {});
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = nullMethod;
  TOP_WINDOW = nativeTopWindow();
}

function attachListeners(scriptElement, callback, removeTag){
  $clinit_ScriptInjector();
  function clearCallbacks(){
    scriptElement.onerror = scriptElement.onreadystatechange = scriptElement.onload = function(){
    }
    ;
    if (removeTag) {
      nativeRemove(scriptElement);
    }
  }

  scriptElement.onload = $entry(function(){
    clearCallbacks();
    if (callback) {
      callback.onSuccess(null);
    }
  }
  );
  scriptElement.onerror = $entry(function(){
    clearCallbacks();
    if (callback) {
      var ex = new CodeDownloadException_0('onerror() called.');
      callback.onFailure(ex);
    }
  }
  );
  scriptElement.onreadystatechange = $entry(function(){
    if (scriptElement.readyState == 'complete' || scriptElement.readyState == 'loaded') {
      scriptElement.onload();
    }
  }
  );
}

function fromUrl(scriptUrl){
  $clinit_ScriptInjector();
  return new ScriptInjector$FromUrl_0(scriptUrl);
}

function nativeAttachToHead(doc, scriptElement){
  $clinit_ScriptInjector();
  doc.getElementsByTagName('head')[0].appendChild(scriptElement);
}

function nativeDefaultWindow(){
  $clinit_ScriptInjector();
  return window;
}

function nativeGetDocument(wnd){
  $clinit_ScriptInjector();
  return wnd.document;
}

function nativeMakeScriptElement(doc){
  $clinit_ScriptInjector();
  var element = doc.createElement('script');
  element.type = 'text/javascript';
  return element;
}

function nativeRemove(scriptElement){
  var p = scriptElement.parentNode;
  p.removeChild(scriptElement);
}

function nativeSetSrc(element, url_0){
  $clinit_ScriptInjector();
  element.src = url_0;
}

function nativeTopWindow(){
  return $wnd;
}

var TOP_WINDOW;
function $$init_23(this$static){
  this$static , false;
}

function $inject(this$static){
  var doc, scriptElement, wnd;
  wnd = isNull(this$static.window_0)?nativeDefaultWindow():this$static.window_0;
  if (isNull(wnd)) {
    debugger;
    throw makeAssertionError();
  }
  doc = nativeGetDocument(wnd);
  if (isNull(doc)) {
    debugger;
    throw makeAssertionError();
  }
  scriptElement = nativeMakeScriptElement(doc);
  if (isNull(scriptElement)) {
    debugger;
    throw makeAssertionError();
  }
  isNotNull(this$static.callback) && attachListeners(scriptElement, this$static.callback, false);
  nativeSetSrc(scriptElement, this$static.scriptUrl);
  nativeAttachToHead(doc, scriptElement);
  return scriptElement;
}

function $setCallback(this$static, callback){
  this$static.callback = callback;
  return this$static;
}

function $setWindow(this$static, window_0){
  this$static.window_0 = window_0;
  return this$static;
}

function ScriptInjector$FromUrl_0(scriptUrl){
  Object_1.call(this);
  $$init_23(this);
  this.scriptUrl = scriptUrl;
}

defineSeed(33, 1, {}, ScriptInjector$FromUrl_0);
function $clinit_Impl(){
  $clinit_Impl = nullMethod;
  false;
  2000;
  new UnloadSupport_0;
  exportUnloadModule();
}

function apply_0(jsFunction, thisObj, args){
  if (isScript()) {
    return jsFunction.apply(thisObj, args);
  }
   else {
    var __0 = jsFunction.apply(thisObj, args);
    if (__0 != null) {
      __0 = Object(__0);
    }
    return __0;
  }
}

function clearInterval_0(timerId){
  $clinit_Impl();
  $clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $clinit_Impl();
  $clearTimeout(timerId);
}

function dispose(d){
  $clinit_Impl();
  $dispose(d);
}

function enter(){
  var now_0;
  if (entryDepth < 0) {
    debugger;
    throw makeAssertionError_Object('Negative entryDepth value at entry ' + entryDepth);
  }
  if (entryDepth != 0) {
    now_0 = currentTimeMillis();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = watchdogEntryDepthSchedule();
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE_0));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    try {
      return entry0(jsFunction, this, arguments);
    }
     catch (e) {
      throw e;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  if ($isUnloadSupported() && isModuleUnloaded()) {
    return null;
  }
  initialEntry = enter();
  try {
    if (jsNotEquals(getUncaughtExceptionHandler(), null)) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, Q$Throwable)) {
          t = $e0;
          reportUncaughtException_0(t);
          return undefined_0();
        }
         else 
          throw unwrap($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE_0));
  --entryDepth;
  if (entryDepth < 0) {
    debugger;
    throw makeAssertionError_Object('Negative entryDepth value at exit ' + entryDepth);
  }
  if (initialEntry) {
    if (entryDepth != 0) {
      debugger;
      throw makeAssertionError_Object('Depth not 0' + entryDepth);
    }
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function exportUnloadModule(){
  $exportUnloadModule();
}

function getHashCode(o){
  $clinit_Impl();
  return o.$H || (o.$H = getNextHashId());
}

function getNextHashId(){
  return ++sNextHashId;
}

function isModuleUnloaded(){
  return false;
}

function registerEntry(){
  $clinit_Impl();
  if (isScript()) {
    return entry_0;
  }
   else {
    return $entry = entry_0;
  }
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportToBrowser_0(e){
  reportToBrowser(instanceOf(e, Q$JavaScriptException)?dynamicCast(e, Q$JavaScriptException).getThrown():e);
}

function reportUncaughtException_0(e){
  $clinit_Impl();
  var handler;
  isNotNull(uncaughtExceptionHandlerForTest) && null.nullMethod();
  handler = getUncaughtExceptionHandler();
  if (isNotNull(handler)) {
    if (jsEquals(handler, uncaughtExceptionHandlerForTest)) {
      return;
    }
    null.nullMethod();
    return;
  }
  reportToBrowser_0(e);
}

function scheduleDispose(){
  $clinit_Impl();
  $scheduleDispose();
}

function setTimeout_0(func, time){
  $clinit_Impl();
  return $setTimeout(func, time);
}

function undefined_0(){
  return;
}

function watchdogEntryDepthCancel(timerId){
  clearTimeout_0(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

function watchdogEntryDepthSchedule(){
  return setTimeout_0(function(){
    watchdogEntryDepthRun();
  }
  , 10);
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = nullMethod;
  INSTANCE_0 = new SchedulerImpl_0;
  1;
  50;
  100;
}

function $$init_24(this$static){
}

function $createDuration(){
  return new Duration_0;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (isNotNull(this$static.entryCommands)) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this$static.entryCommands));
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (isNotNull(this$static.finallyCommands)) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this$static.finallyCommands));
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (isNotNull(this$static.deferredCommands)) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    isNull(this$static.incrementalCommands) && (this$static.incrementalCommands = createQueue());
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  isNotNull(this$static.incrementalCommands) && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return isNotNull(this$static.deferredCommands) || isNotNull(this$static.incrementalCommands);
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    isNull(this$static.flusher) && (this$static.flusher = new SchedulerImpl$Flusher_0(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    isNull(this$static.rescue) && (this$static.rescue = new SchedulerImpl$Rescuer_0(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  if (isNull(tasks)) {
    debugger;
    throw makeAssertionError_Object('tasks');
  }
  length_0 = $length(tasks);
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = $createDuration();
  while ($elapsedMillis(duration) < 100) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      if ($length(tasks) != length_0) {
        debugger;
        throw makeAssertionError_Object('Working array length changed ' + $length(tasks) + ' != ' + length_0);
      }
      t = $get(tasks, i);
      if (isNull(t)) {
        continue;
      }
      executedSomeTask = true;
      if (!$isRepeating(t)) {
        debugger;
        throw makeAssertionError_Object('Found a non-repeating Task');
      }
      if (!$executeRepeating(t)) {
        $set_0(tasks, i, null);
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = createQueue();
    for (i = 0; i < length_0; i++) {
      isNotNull($get(tasks, i)) && $push(newTasks, $get(tasks, i));
    }
    if ($length(newTasks) >= length_0) {
      debugger;
      throw makeAssertionError();
    }
    return $length(newTasks) == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleFixedDelay(cmd, delayMs){
  scheduleFixedDelayImpl(cmd, delayMs);
}

function SchedulerImpl_0(){
  Scheduler_0.call(this);
  $$init_24(this);
}

function createQueue(){
  return $cast(createArray());
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  isNull(queue) && (queue = createQueue());
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  if (isNull(tasks)) {
    debugger;
    throw makeAssertionError_Object('tasks');
  }
  for (i = 0 , j = $length(tasks); i < j; i++) {
    if ($length(tasks) != j) {
      debugger;
      throw makeAssertionError_Object('Working array length changed ' + $length(tasks) + ' != ' + j);
    }
    t = $get(tasks, i);
    try {
      $isRepeating(t)?$executeRepeating(t) && (rescheduled = push_0(rescheduled, t)):$executeScheduled(t);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, Q$Throwable)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  setTimeout_0(function(){
    var ret = $entry(execute_0)(cmd);
    if (!isScript()) {
      ret = ret == true;
    }
    if (ret) {
      setTimeout_0(arguments.callee, delayMs);
    }
  }
  , delayMs);
}

defineSeed(35, 31, {}, SchedulerImpl_0);
_.scheduleDeferred = function scheduleDeferred(cmd){
  this.deferredCommands = push_0(this.deferredCommands, create(cmd));
  $maybeSchedulePostEventPumpCommands(this);
}
;
_.scheduleFinally = function scheduleFinally(cmd){
  this.finallyCommands = push_0(this.finallyCommands, create(cmd));
}
;
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE_0;
function $$init_25(){
}

function SchedulerImpl$Flusher_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_25();
}

defineSeed(36, 1, {}, SchedulerImpl$Flusher_0);
_.execute_0 = function execute_1(){
  this.this$0.flushRunning = true;
  $flushPostEventPumpCommands(this.this$0);
  this.this$0.flushRunning = false;
  return this.this$0.shouldBeRunning = $isWorkQueued(this.this$0);
}
;
function $$init_26(){
}

function SchedulerImpl$Rescuer_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_26();
}

defineSeed(37, 1, {}, SchedulerImpl$Rescuer_0);
_.execute_0 = function execute_2(){
  this.this$0.flushRunning && $scheduleFixedDelay(this.this$0.flusher, 1);
  return this.this$0.shouldBeRunning;
}
;
function $executeRepeating(this$static){
  return $getRepeating(this$static).execute_0();
}

function $executeScheduled(this$static){
  $getScheduled(this$static).execute_1();
}

function $getRepeating(this$static){
  return this$static[0];
}

function $getScheduled(this$static){
  return this$static[0];
}

function $isRepeating(this$static){
  return this$static[1];
}

function create(cmd){
  return [cmd, false];
}

function createStackTrace(){
  return (new StackTraceCreator$CollectorChrome_0).collect();
}

function createStackTrace_0(e){
  (new StackTraceCreator$CollectorChrome_0).createStackTrace(e);
}

function extractNameFromToString(fnToString){
  var index_0, start_0, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index_0 = $indexOf_1(fnToString, '(');
  start_0 = $startsWith(fnToString, 'function')?8:0;
  if (index_0 == -1) {
    index_0 = $indexOf_0(fnToString, 64);
    start_0 = $startsWith(fnToString, 'function ')?9:0;
  }
  index_0 != -1 && (toReturn = $trim($substring_0(fnToString, start_0, index_0)));
  return $length_1(toReturn) > 0?toReturn:'anonymous';
}

function fillInStackTrace(t){
  (new StackTraceCreator$CollectorChrome_0).fillInStackTrace(t);
}

function getProperties(e){
  return $getProperties((new StackTraceCreator$CollectorChrome_0 , e));
}

function parseInt_0(number){
  return parseInt(number) || -1;
}

function splice(arr, length_0){
  arr.length >= length_0 && arr.splice(0, length_0);
  return arr;
}

function $$init_27(){
}

function $getProperties(e){
  var result = '';
  try {
    for (var prop in e) {
      if (prop != 'name' && (prop != 'message' && prop != 'toString')) {
        try {
          var propValue = prop != '__gwt$exception'?e[prop]:'<skipped>';
          result += '\n ' + prop + ': ' + propValue;
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function $makeException(){
  try {
    null.a();
  }
   catch (e) {
    return e;
  }
}

function StackTraceCreator$Collector_0(){
  Object_1.call(this);
  $$init_27();
}

defineSeed(40, 1, {}, StackTraceCreator$Collector_0);
_.collect = function collect(){
  var seen = {};
  var toReturn = [];
  var callee = arguments.callee.caller.caller;
  while (callee) {
    var name_0 = this.extractName(callee.toString());
    toReturn.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return toReturn;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
  return toReturn;
}
;
_.createStackTrace = function createStackTrace_1(e){
  var i, j, stack_0, stackTrace;
  stack_0 = this.inferFrom($getThrown(e));
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, $length_0(stack_0), 0);
  for (i = 0 , j = stackTrace.length; i < j; i++) {
    stackTrace[i] = new StackTraceElement_0('Unknown', $get_0(stack_0, i), null, -1);
  }
  $setStackTrace(e, stackTrace);
}
;
_.extractName = function extractName(fnToString){
  return extractNameFromToString(fnToString);
}
;
_.fillInStackTrace = function fillInStackTrace_0(t){
  var i, j, stack_0, stackTrace;
  stack_0 = createStackTrace();
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, $length_0(stack_0), 0);
  for (i = 0 , j = stackTrace.length; i < j; i++) {
    stackTrace[i] = new StackTraceElement_0('Unknown', $get_0(stack_0, i), null, -1);
  }
  $setStackTrace(t, stackTrace);
}
;
_.inferFrom = function inferFrom(e){
  return $cast(createArray());
}
;
function $$init_28(){
}

function $collect(this$static){
  return splice(this$static.inferFrom($makeException()), this$static.toSplice());
}

function $getStack(e){
  return e && e.stack?e.stack.split('\n'):[];
}

function $inferFrom(this$static, e){
  var i, j, jso, stack_0;
  jso = instanceOfJso(e)?dynamicCastJso(e):null;
  stack_0 = $getStack(jso);
  for (i = 0 , j = $length_0(stack_0); i < j; i++) {
    $set_1(stack_0, i, this$static.extractName($get_0(stack_0, i)));
  }
  return stack_0;
}

function StackTraceCreator$CollectorMoz_0(){
  StackTraceCreator$Collector_0.call(this);
  $$init_28();
}

defineSeed(42, 40, {});
_.collect = function collect_0(){
  return $collect(this);
}
;
_.inferFrom = function inferFrom_0(e){
  return $inferFrom(this, e);
}
;
_.toSplice = function toSplice(){
  return 2;
}
;
function $clinit_StackTraceCreator$CollectorChrome(){
  $clinit_StackTraceCreator$CollectorChrome = nullMethod;
  increaseChromeStackTraceLimit();
}

function $$init_29(){
}

function $inferFrom_0(this$static, e){
  var stack_0;
  stack_0 = $inferFrom(this$static, e);
  if ($length_0(stack_0) == 0) {
    return (new StackTraceCreator$Collector_0).inferFrom(e);
  }
   else {
    $startsWith($get_0(stack_0, 0), 'anonymous@@') && (stack_0 = splice(stack_0, 1));
    return stack_0;
  }
}

function $parseStackTrace(e, stack_0){
  var col, endFileUrl, fileName, i, j, lastColon, line, location_0, stackElements, stackTrace;
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, $length_0(stack_0), 0);
  for (i = 0 , j = stackTrace.length; i < j; i++) {
    stackElements = $split_0($get_0(stack_0, i), '@@');
    line = -1;
    col = -1;
    fileName = 'Unknown';
    if (stackElements.length == 2 && jsNotEquals(stackElements[1], null)) {
      location_0 = stackElements[1];
      lastColon = $lastIndexOf(location_0, 58);
      endFileUrl = $lastIndexOf_0(location_0, 58, lastColon - 1);
      fileName = $substring_0(location_0, 0, endFileUrl);
      if (lastColon != -1 && endFileUrl != -1) {
        line = parseInt_0($substring_0(location_0, endFileUrl + 1, lastColon));
        col = parseInt_0($substring(location_0, lastColon + 1));
      }
    }
    stackTrace[i] = new StackTraceElement_0('Unknown', stackElements[0], fileName + '@' + col, $replaceIfNoSourceMap(line < 0?-1:line));
  }
  $setStackTrace(e, stackTrace);
}

function $replaceIfNoSourceMap(line){
  return line;
}

function StackTraceCreator$CollectorChrome_0(){
  $clinit_StackTraceCreator$CollectorChrome();
  StackTraceCreator$CollectorMoz_0.call(this);
  $$init_29();
}

function increaseChromeStackTraceLimit(){
  Error.stackTraceLimit = 128;
}

defineSeed(41, 42, {}, StackTraceCreator$CollectorChrome_0);
_.collect = function collect_1(){
  var res;
  res = $collect(this);
  $length_0(res) == 0 && (res = splice((new StackTraceCreator$Collector_0).collect(), 1));
  return res;
}
;
_.createStackTrace = function createStackTrace_2(e){
  var stack_0;
  stack_0 = $inferFrom_0(this, $getThrown(e));
  $parseStackTrace(e, stack_0);
}
;
_.extractName = function extractName_0(fnToString){
  var closeParen, index_0, location_0, toReturn;
  'anonymous';
  location_0 = '';
  if ($length_1(fnToString) == 0) {
    return 'anonymous';
  }
  toReturn = $trim(fnToString);
  $startsWith(toReturn, 'at ') && (toReturn = $substring(toReturn, 3));
  index_0 = $indexOf_1(toReturn, '[');
  index_0 != -1 && (toReturn = $trim($substring_0(toReturn, 0, index_0)) + $trim($substring(toReturn, $indexOf_2(toReturn, ']', index_0) + 1)));
  index_0 = $indexOf_1(toReturn, '(');
  if (index_0 == -1) {
    index_0 = $indexOf_1(toReturn, '@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim($substring(toReturn, index_0 + 1));
      toReturn = $trim($substring_0(toReturn, 0, index_0));
    }
  }
   else {
    closeParen = $indexOf_2(toReturn, ')', index_0);
    location_0 = $substring_0(toReturn, index_0 + 1, closeParen);
    toReturn = $trim($substring_0(toReturn, 0, index_0));
  }
  index_0 = $indexOf_0(toReturn, 46);
  index_0 != -1 && (toReturn = $substring(toReturn, index_0 + 1));
  return ($length_1(toReturn) > 0?toReturn:'anonymous') + '@@' + location_0;
}
;
_.fillInStackTrace = function fillInStackTrace_1(t){
  var stack_0;
  stack_0 = createStackTrace();
  $parseStackTrace(t, stack_0);
}
;
_.inferFrom = function inferFrom_1(e){
  return $inferFrom_0(this, e);
}
;
_.toSplice = function toSplice_0(){
  return 3;
}
;
function $$init_30(){
}

function StringBufferImpl_0(){
  Object_1.call(this);
  $$init_30();
}

defineSeed(43, 1, {});
function $$init_31(this$static){
}

function StringBufferImplAppend_0(){
  StringBufferImpl_0.call(this);
  $$init_31(this);
}

defineSeed(44, 43, {}, StringBufferImplAppend_0);
_.append = function append(data_0, x_0){
  this.string += x_0;
}
;
_.appendNonNull = function appendNonNull(data_0, x_0){
  this.string += x_0;
}
;
_.createData = function createData(){
  return null;
}
;
_.toString_0 = function toString_3(data_0){
  return this.string;
}
;
_.string = '';
function $$init_32(){
}

function JsLogger_0(){
  Object_1.call(this);
  $$init_32();
}

defineSeed(46, 1, {});
_.log_0 = function log_1(message, e){
}
;
function $$init_33(){
}

function $consoleErrorEnabled(){
  return !!($wnd.console && $wnd.console.error);
}

function $consoleLogEnabled(){
  return !!($wnd.console && $wnd.console.log);
}

function $error(message){
  $wnd.console.error(message);
}

function $log(message){
  $wnd.console.log(message);
}

function $makeSimpleStackTrace(first){
  var element, element$array, element$index, element$max, out, t;
  out = new StringBuilder_0;
  for (t = first; isNotNull(t); t = $getCause(t)) {
    jsEquals(t, first)?$append_1(out, $toString(t) + '\n'):$append_1(out, 'Caused by: ' + $toString(t) + '\n');
    for (element$array = $getStackTrace(t) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
      element = element$array[element$index];
      $append_1(out, '  at ' + $getMethodName(element) + '\n');
    }
  }
  return $toString_2(out);
}

function SuperDevModeLogger_0(){
  JsLogger_0.call(this);
  $$init_33();
}

defineSeed(45, 46, {}, SuperDevModeLogger_0);
_.log_0 = function log_2(message, t){
  var out;
  if (!$consoleLogEnabled()) {
    return;
  }
  $log(message);
  if (isNotNull(t)) {
    out = $makeSimpleStackTrace(t);
    $consoleErrorEnabled()?$error(out):$log(out);
  }
}
;
function $$init_34(){
}

function $clearInterval(timerId){
  clearInterval0(timerId);
}

function $clearTimeout(timerId){
  clearTimeout0(timerId);
}

function $dispose(d){
  isNotNull(d) && d.dispose();
}

function $exportUnloadModule(){
}

function $isUnloadSupported(){
  return false;
}

function $scheduleDispose(){
}

function $setTimeout(func, time){
  return setTimeout0(func, time, null);
}

function UnloadSupport_0(){
  Object_1.call(this);
  $$init_34();
}

function clearInterval0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout0(timerId){
  $wnd.clearTimeout(timerId);
}

function setTimeout0(func, time, disposeable){
  var timerId = $wnd.setTimeout(function(){
    func();
    if (disposeable != null) {
      dispose(disposeable);
    }
  }
  , time);
  return timerId;
}

defineSeed(47, 1, {}, UnloadSupport_0);
function $clinit_GWT(){
  $clinit_GWT = nullMethod;
  null;
  isScript_0()?(logger = new SuperDevModeLogger_0):(logger = null);
}

function isScript_0(){
  return true;
}

function log_3(message){
  $clinit_GWT();
  log_4(message, null);
}

function log_4(message, e){
  isNotNull(logger) && logger.log_0(message, e);
}

var logger;
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $getNodeType(this$static){
  return this$static.nodeType;
}

function $getParentElement(this$static){
  return $getParentElement_0(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getParentNode(this$static){
  return this$static.parentNode;
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $isOrHasChild(this$static, child){
  if (isNull(child)) {
    debugger;
    throw makeAssertionError_Object('Child cannot be null');
  }
  return ($clinit_DOMImpl() , impl_0).isOrHasChild(this$static, child);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $removeFromParent(this$static){
  var parent_0;
  parent_0 = $getParentElement(this$static);
  isNotNull(parent_0) && $removeChild(parent_0, this$static);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    $length_1(oldClassName) > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $blur(this$static){
  this$static.blur();
}

function $focus(this$static){
  this$static.focus();
}

function $getClassName(this$static){
  return this$static.className;
}

function $getClientHeight(this$static){
  return toInt32($getSubPixelClientHeight(this$static));
}

function $getClientWidth(this$static){
  return toInt32($getSubPixelClientWidth(this$static));
}

function $getFirstChildElement(this$static){
  return $getFirstChildElement_0(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getInnerHTML(this$static){
  return $getInnerHTML_0(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getInnerText(this$static){
  return ($clinit_DOMImpl() , impl_0).getInnerText(this$static);
}

function $getNextSiblingElement(this$static){
  return $getNextSiblingElement_0(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getOffsetHeight(this$static){
  return toInt32($getSubPixelOffsetHeight(this$static));
}

function $getOffsetWidth(this$static){
  return toInt32($getSubPixelOffsetWidth(this$static));
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getString(this$static){
  return $toString_0(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getStyle(this$static){
  return this$static.style;
}

function $getSubPixelClientHeight(this$static){
  return this$static.clientHeight;
}

function $getSubPixelClientWidth(this$static){
  return this$static.clientWidth;
}

function $getSubPixelOffsetHeight(this$static){
  return this$static.offsetHeight || 0;
}

function $getSubPixelOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $getTabIndex(this$static){
  return ($clinit_DOMImpl() , impl_0).getTabIndex(this$static);
}

function $getTagName(this$static){
  return $getTagName_0(($clinit_DOMImpl() , impl_0 , this$static));
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim($substring_0(oldStyle, 0, idx));
    end = $trim($substring(oldStyle, idx + $length_1(className)));
    $length_1(begin) == 0?(newClassName = end):$length_1(end) == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className;
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setInnerText(this$static, text_0){
  ($clinit_DOMImpl() , impl_0).setInnerText(this$static, text_0);
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = $indexOf_1(nameList, name_0);
  while (idx != -1) {
    if (idx == 0 || $charAt(nameList, idx - 1) == 32) {
      last = idx + $length_1(name_0);
      lastPos = $length_1(nameList);
      if (last == lastPos || last < lastPos && $charAt(nameList, last) == 32) {
        break;
      }
    }
    idx = $indexOf_2(nameList, name_0, idx + 1);
  }
  return idx;
}

function toInt32(val){
  return val | 0;
}

function trimClassName(className){
  if (jsEquals(className, null)) {
    debugger;
    throw makeAssertionError_Object('Unexpectedly null class name');
  }
  className = $trim(className);
  if ($isEmpty(className)) {
    debugger;
    throw makeAssertionError_Object('Unexpectedly empty class name');
  }
  return className;
}

function $clinit_DOMImpl(){
  $clinit_DOMImpl = nullMethod;
  impl_0 = new DOMImplWebkit_0;
}

function $$init_35(){
}

function $createElement(doc, tag){
  return doc.createElement(tag);
}

function $createInputElement(doc, type_0){
  var e = doc.createElement('INPUT');
  e.type = type_0;
  return e;
}

function $eventGetType(evt){
  return evt.type;
}

function $eventStopPropagation(evt){
  evt.stopPropagation();
}

function $getFirstChildElement_0(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getInnerHTML_0(elem){
  return elem.innerHTML;
}

function $getNextSiblingElement_0(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement_0(node){
  var parent_0 = node.parentNode;
  if (!parent_0 || parent_0.nodeType != 1) {
    parent_0 = null;
  }
  return parent_0;
}

function $getTagName_0(elem){
  return elem.tagName;
}

function $toString_0(elem){
  return elem.outerHTML;
}

function DOMImpl_0(){
  Object_1.call(this);
  $$init_35();
}

defineSeed(53, 1, {});
_.createButtonElement = function createButtonElement(doc, type_0){
  var e = doc.createElement('BUTTON');
  e.type = type_0;
  return e;
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget(event_0){
  return event_0.currentTarget;
}
;
_.getInnerText = function getInnerText(node){
  var text_0 = '', child = node.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      text_0 += this.getInnerText(child);
    }
     else if (child.nodeValue) {
      text_0 += child.nodeValue;
    }
    child = child.nextSibling;
  }
  return text_0;
}
;
_.getTabIndex = function getTabIndex(elem){
  return elem.tabIndex;
}
;
_.setInnerText = function setInnerText(elem, text_0){
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  if (text_0 != null) {
    elem.appendChild(elem.ownerDocument.createTextNode(text_0));
  }
}
;
var impl_0;
function $$init_36(){
}

function DOMImplStandard_0(){
  DOMImpl_0.call(this);
  $$init_36();
}

defineSeed(54, 53, {});
_.eventGetRelatedTarget = function eventGetRelatedTarget(evt){
  return evt.relatedTarget;
}
;
_.eventPreventDefault = function eventPreventDefault(evt){
  evt.preventDefault();
}
;
_.getInnerText = function getInnerText_0(elem){
  return elem.textContent;
}
;
_.isOrHasChild = function isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}
;
_.setInnerText = function setInnerText_0(elem, text_0){
  elem.textContent = text_0 || '';
}
;
function $$init_37(){
}

function DOMImplStandardBase_0(){
  DOMImplStandard_0.call(this);
  $$init_37();
}

defineSeed(55, 54, {});
_.createButtonElement = function createButtonElement_0(doc, type_0){
  var e = doc.createElement('BUTTON');
  e.setAttribute('type', type_0);
  return e;
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget_0(event_0){
  return event_0.currentTarget || $wnd;
}
;
_.getTabIndex = function getTabIndex_0(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}
;
function $$init_38(){
}

function DOMImplWebkit_0(){
  DOMImplStandardBase_0.call(this);
  $$init_38();
}

defineSeed(56, 55, {}, DOMImplWebkit_0);
function $createDivElement(this$static){
  return $createElement(($clinit_DOMImpl() , impl_0 , this$static), 'div');
}

function $createElement_0(this$static, tagName){
  return $createElement(($clinit_DOMImpl() , impl_0 , this$static), tagName);
}

function $createPushButtonElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createButtonElement(this$static, 'button');
}

function $createSpanElement(this$static){
  return $createElement(($clinit_DOMImpl() , impl_0 , this$static), 'span');
}

function $createTextInputElement(this$static){
  return $createInputElement(($clinit_DOMImpl() , impl_0 , this$static), 'text');
}

function $getBody(this$static){
  return this$static.body;
}

function $getClientHeight_0(this$static){
  return $getClientHeight($getViewportElement(this$static));
}

function $getClientWidth_0(this$static){
  return $getClientWidth($getViewportElement(this$static));
}

function $getCompatMode(this$static){
  return this$static.compatMode;
}

function $getDocumentElement(this$static){
  return this$static.documentElement;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getElementsByTagName(this$static, tagName){
  return this$static.getElementsByTagName(tagName);
}

function $getViewportElement(this$static){
  return $isCSS1Compat(this$static)?$getDocumentElement(this$static):$getBody(this$static);
}

function $isCSS1Compat(this$static){
  return $equals_1($getCompatMode(this$static), 'CSS1Compat');
}

function get_2(){
  return nativeGet();
}

function nativeGet(){
  return $doc;
}

function $getCurrentEventTarget(this$static){
  return ($clinit_DOMImpl() , impl_0).eventGetCurrentTarget(this$static);
}

function $getRelatedEventTarget(this$static){
  return ($clinit_DOMImpl() , impl_0).eventGetRelatedTarget(this$static);
}

function $getType(this$static){
  return $eventGetType(($clinit_DOMImpl() , impl_0 , this$static));
}

function $preventDefault(this$static){
  ($clinit_DOMImpl() , impl_0).eventPreventDefault(this$static);
}

function $stopPropagation(this$static){
  $eventStopPropagation(($clinit_DOMImpl() , impl_0 , this$static));
}

function $getItem(this$static, index_0){
  return this$static[index_0];
}

function $getLength(this$static){
  return this$static.length;
}

function $assertCamelCase(name_0){
  if ($contains(name_0, '-')) {
    debugger;
    throw makeAssertionError_Object("The style name '" + name_0 + "' should be in camelCase format");
  }
}

function $clearBottom(this$static){
  $clearProperty(this$static, 'bottom');
}

function $clearDisplay(this$static){
  $clearProperty(this$static, 'display');
}

function $clearHeight(this$static){
  $clearProperty(this$static, 'height');
}

function $clearLeft(this$static){
  $clearProperty(this$static, 'left');
}

function $clearPosition(this$static){
  $clearProperty(this$static, 'position');
}

function $clearProperty(this$static, name_0){
  $setProperty_0(this$static, name_0, '');
}

function $clearRight(this$static){
  $clearProperty(this$static, 'right');
}

function $clearTop(this$static){
  $clearProperty(this$static, 'top');
}

function $clearWidth(this$static){
  $clearProperty(this$static, 'width');
}

function $setBottom(this$static, value_0, unit){
  $setProperty(this$static, 'bottom', value_0, unit);
}

function $setDisplay(this$static, value_0){
  $setProperty_0(this$static, 'display', value_0.getCssName());
}

function $setHeight(this$static, value_0, unit){
  $setProperty(this$static, 'height', value_0, unit);
}

function $setLeft(this$static, value_0, unit){
  $setProperty(this$static, 'left', value_0, unit);
}

function $setOverflow(this$static, value_0){
  $setProperty_0(this$static, 'overflow', value_0.getCssName());
}

function $setPosition(this$static, value_0){
  $setProperty_0(this$static, 'position', value_0.getCssName());
}

function $setProperty(this$static, name_0, value_0, unit){
  $assertCamelCase(name_0);
  $setPropertyImpl(this$static, name_0, value_0 + unit.getType());
}

function $setProperty_0(this$static, name_0, value_0){
  $assertCamelCase(name_0);
  $setPropertyImpl(this$static, name_0, value_0);
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setRight(this$static, value_0, unit){
  $setProperty(this$static, 'right', value_0, unit);
}

function $setTop(this$static, value_0, unit){
  $setProperty(this$static, 'top', value_0, unit);
}

function $setVisibility(this$static, value_0){
  $setProperty_0(this$static, 'visibility', value_0.getCssName());
}

function $setWidth(this$static, value_0, unit){
  $setProperty(this$static, 'width', value_0, unit);
}

function $setZIndex(this$static, value_0){
  $setProperty_0(this$static, 'zIndex', value_0 + '');
}

function $clinit_Style$Display(){
  $clinit_Style$Display = nullMethod;
  NONE = new Style$Display$1_0('NONE', 0);
  BLOCK = new Style$Display$2_0('BLOCK', 1);
  INLINE = new Style$Display$3_0('INLINE', 2);
  INLINE_BLOCK = new Style$Display$4_0('INLINE_BLOCK', 3);
  $VALUES_0 = initValues(_3Lcom_google_gwt_dom_client_Style$Display_2_classLit, makeCastMap([Q$Serializable]), Q$Style$Display, [NONE, BLOCK, INLINE, INLINE_BLOCK]);
}

function $$init_39(){
}

function Style$Display_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_39();
}

function valueOf_1(name_0){
  $clinit_Style$Display();
  return valueOf(($clinit_Style$Display$Map() , $MAP_0), name_0);
}

function values_1(){
  $clinit_Style$Display();
  return $VALUES_0;
}

defineSeed(63, 23, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_0, BLOCK, INLINE, INLINE_BLOCK, NONE;
function $$init_40(){
}

function Style$Display$1_0(enum$name, enum$ordinal){
  Style$Display_0.call(this, enum$name, enum$ordinal);
  $$init_40();
}

defineSeed(64, 63, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$1_0);
_.getCssName = function getCssName(){
  return 'none';
}
;
function $$init_41(){
}

function Style$Display$2_0(enum$name, enum$ordinal){
  Style$Display_0.call(this, enum$name, enum$ordinal);
  $$init_41();
}

defineSeed(65, 63, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$2_0);
_.getCssName = function getCssName_0(){
  return 'block';
}
;
function $$init_42(){
}

function Style$Display$3_0(enum$name, enum$ordinal){
  Style$Display_0.call(this, enum$name, enum$ordinal);
  $$init_42();
}

defineSeed(66, 63, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$3_0);
_.getCssName = function getCssName_1(){
  return 'inline';
}
;
function $$init_43(){
}

function Style$Display$4_0(enum$name, enum$ordinal){
  Style$Display_0.call(this, enum$name, enum$ordinal);
  $$init_43();
}

defineSeed(67, 63, makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]), Style$Display$4_0);
_.getCssName = function getCssName_2(){
  return 'inline-block';
}
;
function $clinit_Style$Display$Map(){
  $clinit_Style$Display$Map = nullMethod;
  $MAP_0 = createValueOfMap(($clinit_Style$Display() , $VALUES_0));
}

var $MAP_0;
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = nullMethod;
  VISIBLE = new Style$Overflow$1_0('VISIBLE', 0);
  HIDDEN_0 = new Style$Overflow$2_0('HIDDEN', 1);
  SCROLL = new Style$Overflow$3_0('SCROLL', 2);
  AUTO = new Style$Overflow$4_0('AUTO', 3);
  $VALUES_1 = initValues(_3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, makeCastMap([Q$Serializable]), Q$Style$Overflow, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

function $$init_44(){
}

function Style$Overflow_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_44();
}

function valueOf_2(name_0){
  $clinit_Style$Overflow();
  return valueOf(($clinit_Style$Overflow$Map() , $MAP_1), name_0);
}

function values_2(){
  $clinit_Style$Overflow();
  return $VALUES_1;
}

defineSeed(69, 23, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_1, AUTO, HIDDEN_0, SCROLL, VISIBLE;
function $$init_45(){
}

function Style$Overflow$1_0(enum$name, enum$ordinal){
  Style$Overflow_0.call(this, enum$name, enum$ordinal);
  $$init_45();
}

defineSeed(70, 69, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$1_0);
_.getCssName = function getCssName_3(){
  return 'visible';
}
;
function $$init_46(){
}

function Style$Overflow$2_0(enum$name, enum$ordinal){
  Style$Overflow_0.call(this, enum$name, enum$ordinal);
  $$init_46();
}

defineSeed(71, 69, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$2_0);
_.getCssName = function getCssName_4(){
  return 'hidden';
}
;
function $$init_47(){
}

function Style$Overflow$3_0(enum$name, enum$ordinal){
  Style$Overflow_0.call(this, enum$name, enum$ordinal);
  $$init_47();
}

defineSeed(72, 69, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$3_0);
_.getCssName = function getCssName_5(){
  return 'scroll';
}
;
function $$init_48(){
}

function Style$Overflow$4_0(enum$name, enum$ordinal){
  Style$Overflow_0.call(this, enum$name, enum$ordinal);
  $$init_48();
}

defineSeed(73, 69, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]), Style$Overflow$4_0);
_.getCssName = function getCssName_6(){
  return 'auto';
}
;
function $clinit_Style$Overflow$Map(){
  $clinit_Style$Overflow$Map = nullMethod;
  $MAP_1 = createValueOfMap(($clinit_Style$Overflow() , $VALUES_1));
}

var $MAP_1;
function $clinit_Style$Position(){
  $clinit_Style$Position = nullMethod;
  STATIC = new Style$Position$1_0('STATIC', 0);
  RELATIVE = new Style$Position$2_0('RELATIVE', 1);
  ABSOLUTE = new Style$Position$3_0('ABSOLUTE', 2);
  FIXED = new Style$Position$4_0('FIXED', 3);
  $VALUES_2 = initValues(_3Lcom_google_gwt_dom_client_Style$Position_2_classLit, makeCastMap([Q$Serializable]), Q$Style$Position, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

function $$init_49(){
}

function Style$Position_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_49();
}

function valueOf_3(name_0){
  $clinit_Style$Position();
  return valueOf(($clinit_Style$Position$Map() , $MAP_2), name_0);
}

function values_3(){
  $clinit_Style$Position();
  return $VALUES_2;
}

defineSeed(75, 23, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_2, ABSOLUTE, FIXED, RELATIVE, STATIC;
function $$init_50(){
}

function Style$Position$1_0(enum$name, enum$ordinal){
  Style$Position_0.call(this, enum$name, enum$ordinal);
  $$init_50();
}

defineSeed(76, 75, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]), Style$Position$1_0);
_.getCssName = function getCssName_7(){
  return 'static';
}
;
function $$init_51(){
}

function Style$Position$2_0(enum$name, enum$ordinal){
  Style$Position_0.call(this, enum$name, enum$ordinal);
  $$init_51();
}

defineSeed(77, 75, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]), Style$Position$2_0);
_.getCssName = function getCssName_8(){
  return 'relative';
}
;
function $$init_52(){
}

function Style$Position$3_0(enum$name, enum$ordinal){
  Style$Position_0.call(this, enum$name, enum$ordinal);
  $$init_52();
}

defineSeed(78, 75, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]), Style$Position$3_0);
_.getCssName = function getCssName_9(){
  return 'absolute';
}
;
function $$init_53(){
}

function Style$Position$4_0(enum$name, enum$ordinal){
  Style$Position_0.call(this, enum$name, enum$ordinal);
  $$init_53();
}

defineSeed(79, 75, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]), Style$Position$4_0);
_.getCssName = function getCssName_10(){
  return 'fixed';
}
;
function $clinit_Style$Position$Map(){
  $clinit_Style$Position$Map = nullMethod;
  $MAP_2 = createValueOfMap(($clinit_Style$Position() , $VALUES_2));
}

var $MAP_2;
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = nullMethod;
  CENTER = new Style$TextAlign$1_0('CENTER', 0);
  JUSTIFY = new Style$TextAlign$2_0('JUSTIFY', 1);
  LEFT = new Style$TextAlign$3_0('LEFT', 2);
  RIGHT = new Style$TextAlign$4_0('RIGHT', 3);
  $VALUES_3 = initValues(_3Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, makeCastMap([Q$Serializable]), Q$Style$TextAlign, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

function $$init_54(){
}

function Style$TextAlign_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_54();
}

function valueOf_4(name_0){
  $clinit_Style$TextAlign();
  return valueOf(($clinit_Style$TextAlign$Map() , $MAP_3), name_0);
}

function values_4(){
  $clinit_Style$TextAlign();
  return $VALUES_3;
}

defineSeed(81, 23, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_3, CENTER, JUSTIFY, LEFT, RIGHT;
function $$init_55(){
}

function Style$TextAlign$1_0(enum$name, enum$ordinal){
  Style$TextAlign_0.call(this, enum$name, enum$ordinal);
  $$init_55();
}

defineSeed(82, 81, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]), Style$TextAlign$1_0);
_.getCssName = function getCssName_11(){
  return 'center';
}
;
function $$init_56(){
}

function Style$TextAlign$2_0(enum$name, enum$ordinal){
  Style$TextAlign_0.call(this, enum$name, enum$ordinal);
  $$init_56();
}

defineSeed(83, 81, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]), Style$TextAlign$2_0);
_.getCssName = function getCssName_12(){
  return 'justify';
}
;
function $$init_57(){
}

function Style$TextAlign$3_0(enum$name, enum$ordinal){
  Style$TextAlign_0.call(this, enum$name, enum$ordinal);
  $$init_57();
}

defineSeed(84, 81, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]), Style$TextAlign$3_0);
_.getCssName = function getCssName_13(){
  return 'left';
}
;
function $$init_58(){
}

function Style$TextAlign$4_0(enum$name, enum$ordinal){
  Style$TextAlign_0.call(this, enum$name, enum$ordinal);
  $$init_58();
}

defineSeed(85, 81, makeCastMap([Q$Style$HasCssName, Q$Style$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]), Style$TextAlign$4_0);
_.getCssName = function getCssName_14(){
  return 'right';
}
;
function $clinit_Style$TextAlign$Map(){
  $clinit_Style$TextAlign$Map = nullMethod;
  $MAP_3 = createValueOfMap(($clinit_Style$TextAlign() , $VALUES_3));
}

var $MAP_3;
function $clinit_Style$Unit(){
  $clinit_Style$Unit = nullMethod;
  PX = new Style$Unit$1_0('PX', 0);
  PCT = new Style$Unit$2_0('PCT', 1);
  EM = new Style$Unit$3_0('EM', 2);
  EX = new Style$Unit$4_0('EX', 3);
  PT = new Style$Unit$5_0('PT', 4);
  PC = new Style$Unit$6_0('PC', 5);
  IN = new Style$Unit$7_0('IN', 6);
  CM = new Style$Unit$8_0('CM', 7);
  MM = new Style$Unit$9_0('MM', 8);
  $VALUES_4 = initValues(_3Lcom_google_gwt_dom_client_Style$Unit_2_classLit, makeCastMap([Q$Serializable]), Q$Style$Unit, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

function $$init_59(){
}

function Style$Unit_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_59();
}

function valueOf_5(name_0){
  $clinit_Style$Unit();
  return valueOf(($clinit_Style$Unit$Map() , $MAP_4), name_0);
}

function values_5(){
  $clinit_Style$Unit();
  return $VALUES_4;
}

defineSeed(87, 23, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_4, CM, EM, EX, IN, MM, PC, PCT, PT, PX;
function $$init_60(){
}

function Style$Unit$1_0(enum$name, enum$ordinal){
  Style$Unit_0.call(this, enum$name, enum$ordinal);
  $$init_60();
}

defineSeed(88, 87, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]), Style$Unit$1_0);
_.getType = function getType(){
  return 'px';
}
;
function $$init_61(){
}

function Style$Unit$2_0(enum$name, enum$ordinal){
  Style$Unit_0.call(this, enum$name, enum$ordinal);
  $$init_61();
}

defineSeed(89, 87, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]), Style$Unit$2_0);
_.getType = function getType_0(){
  return '%';
}
;
function $$init_62(){
}

function Style$Unit$3_0(enum$name, enum$ordinal){
  Style$Unit_0.call(this, enum$name, enum$ordinal);
  $$init_62();
}

defineSeed(90, 87, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]), Style$Unit$3_0);
_.getType = function getType_1(){
  return 'em';
}
;
function $$init_63(){
}

function Style$Unit$4_0(enum$name, enum$ordinal){
  Style$Unit_0.call(this, enum$name, enum$ordinal);
  $$init_63();
}

defineSeed(91, 87, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]), Style$Unit$4_0);
_.getType = function getType_2(){
  return 'ex';
}
;
function $$init_64(){
}

function Style$Unit$5_0(enum$name, enum$ordinal){
  Style$Unit_0.call(this, enum$name, enum$ordinal);
  $$init_64();
}

defineSeed(92, 87, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]), Style$Unit$5_0);
_.getType = function getType_3(){
  return 'pt';
}
;
function $$init_65(){
}

function Style$Unit$6_0(enum$name, enum$ordinal){
  Style$Unit_0.call(this, enum$name, enum$ordinal);
  $$init_65();
}

defineSeed(93, 87, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]), Style$Unit$6_0);
_.getType = function getType_4(){
  return 'pc';
}
;
function $$init_66(){
}

function Style$Unit$7_0(enum$name, enum$ordinal){
  Style$Unit_0.call(this, enum$name, enum$ordinal);
  $$init_66();
}

defineSeed(94, 87, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]), Style$Unit$7_0);
_.getType = function getType_5(){
  return 'in';
}
;
function $$init_67(){
}

function Style$Unit$8_0(enum$name, enum$ordinal){
  Style$Unit_0.call(this, enum$name, enum$ordinal);
  $$init_67();
}

defineSeed(95, 87, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]), Style$Unit$8_0);
_.getType = function getType_6(){
  return 'cm';
}
;
function $$init_68(){
}

function Style$Unit$9_0(enum$name, enum$ordinal){
  Style$Unit_0.call(this, enum$name, enum$ordinal);
  $$init_68();
}

defineSeed(96, 87, makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]), Style$Unit$9_0);
_.getType = function getType_7(){
  return 'mm';
}
;
function $clinit_Style$Unit$Map(){
  $clinit_Style$Unit$Map = nullMethod;
  $MAP_4 = createValueOfMap(($clinit_Style$Unit() , $VALUES_4));
}

var $MAP_4;
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = nullMethod;
  VISIBLE_0 = new Style$Visibility$1_0('VISIBLE', 0);
  HIDDEN_1 = new Style$Visibility$2_0('HIDDEN', 1);
  $VALUES_5 = initValues(_3Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, makeCastMap([Q$Serializable]), Q$Style$Visibility, [VISIBLE_0, HIDDEN_1]);
}

function $$init_69(){
}

function Style$Visibility_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_69();
}

function valueOf_6(name_0){
  $clinit_Style$Visibility();
  return valueOf(($clinit_Style$Visibility$Map() , $MAP_5), name_0);
}

function values_6(){
  $clinit_Style$Visibility();
  return $VALUES_5;
}

defineSeed(98, 23, makeCastMap([Q$Style$HasCssName, Q$Style$Visibility, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_5, HIDDEN_1, VISIBLE_0;
function $$init_70(){
}

function Style$Visibility$1_0(enum$name, enum$ordinal){
  Style$Visibility_0.call(this, enum$name, enum$ordinal);
  $$init_70();
}

defineSeed(99, 98, makeCastMap([Q$Style$HasCssName, Q$Style$Visibility, Q$Serializable, Q$Comparable, Q$Enum]), Style$Visibility$1_0);
_.getCssName = function getCssName_15(){
  return 'visible';
}
;
function $$init_71(){
}

function Style$Visibility$2_0(enum$name, enum$ordinal){
  Style$Visibility_0.call(this, enum$name, enum$ordinal);
  $$init_71();
}

defineSeed(100, 98, makeCastMap([Q$Style$HasCssName, Q$Style$Visibility, Q$Serializable, Q$Comparable, Q$Enum]), Style$Visibility$2_0);
_.getCssName = function getCssName_16(){
  return 'hidden';
}
;
function $clinit_Style$Visibility$Map(){
  $clinit_Style$Visibility$Map = nullMethod;
  $MAP_5 = createValueOfMap(($clinit_Style$Visibility() , $VALUES_5));
}

var $MAP_5;
function $$init_72(){
}

function $getSource(this$static){
  return this$static.source;
}

function $setSource(this$static, source){
  this$static.source = source;
}

function Event_1(){
  Object_1.call(this);
  $$init_72();
}

defineSeed(107, 1, {});
_.toString$ = function toString_4(){
  return 'An event type';
}
;
function $$init_73(){
}

function $assertLive(this$static){
  if (this$static.dead) {
    debugger;
    throw makeAssertionError_Object('This event has already finished being processed by its original handler manager, so you can no longer access it');
  }
}

function $getSource_0(this$static){
  $assertLive(this$static);
  return $getSource(this$static);
}

function $isLive(this$static){
  return !this$static.dead;
}

function $kill(this$static){
  this$static.dead = true;
  $setSource(this$static, null);
}

function $overrideSource(this$static, source){
  $setSource(this$static, source);
}

function $revive(this$static){
  this$static.dead = false;
  $setSource(this$static, null);
}

function GwtEvent_0(){
  Event_1.call(this);
  $$init_73();
}

defineSeed(106, 107, {});
_.dispatch = function dispatch(handler){
  this.dispatch_0(dynamicCast(handler, Q$EventHandler));
}
;
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
_.dead = false;
function $$init_74(){
}

function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function DomEvent_0(){
  GwtEvent_0.call(this);
  $$init_74();
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (isNull(nativeEvent)) {
    debugger;
    throw makeAssertionError_Object('nativeEvent must not be null');
  }
  if (isNotNull(registered)) {
    types = dynamicCast($unsafeGet(registered, $getType(nativeEvent)), Q$List);
    if (isNotNull(types)) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), Q$DomEvent$Type);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        handlerSource.fireEvent(type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

function init(){
  registered = new PrivateMap_0;
}

defineSeed(105, 106, {});
_.getAssociatedType_0 = function getAssociatedType_0(){
  return this.getAssociatedType_1();
}
;
var registered;
function $$init_75(){
}

function HumanInputEvent_0(){
  DomEvent_0.call(this);
  $$init_75();
}

defineSeed(104, 105, {});
function $$init_76(){
}

function MouseEvent_1(){
  HumanInputEvent_0.call(this);
  $$init_76();
}

defineSeed(103, 104, {});
function $clinit_ClickEvent(){
  $clinit_ClickEvent = nullMethod;
  TYPE = new DomEvent$Type_0('click', new ClickEvent_0);
}

function $$init_77(){
}

function $dispatch(this$static, handler){
  handler.onClick(this$static);
}

function ClickEvent_0(){
  MouseEvent_1.call(this);
  $$init_77();
}

function getType_8(){
  $clinit_ClickEvent();
  return TYPE;
}

defineSeed(102, 103, {}, ClickEvent_0);
_.dispatch_0 = function dispatch_0(handler){
  $dispatch(this, dynamicCast(handler, Q$ClickHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_1(){
  return TYPE;
}
;
var TYPE;
function $$init_78(){
}

function Event$Type_0(){
  Object_1.call(this);
  $$init_78();
  this.index_0 = ++nextHashCode;
}

defineSeed(110, 1, {});
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_5(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
function $$init_79(){
}

function GwtEvent$Type_0(){
  Event$Type_0.call(this);
  $$init_79();
}

defineSeed(109, 110, {}, GwtEvent$Type_0);
function $$init_80(){
}

function $getName(this$static){
  return this$static.name_0;
}

function DomEvent$Type_0(eventName, flyweight){
  var types;
  GwtEvent$Type_0.call(this);
  $$init_80();
  this.flyweight = flyweight;
  isNull(registered) && init();
  types = dynamicCast($unsafeGet(registered, eventName), Q$List);
  if (isNull(types)) {
    types = new ArrayList_0;
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineSeed(108, 109, makeCastMap([Q$DomEvent$Type]), DomEvent$Type_0);
function $$init_81(){
}

function KeyEvent_1(){
  DomEvent_0.call(this);
  $$init_81();
}

defineSeed(112, 105, {});
function $$init_82(){
}

function KeyCodeEvent_0(){
  KeyEvent_1.call(this);
  $$init_82();
}

defineSeed(111, 112, {});
function $clinit_KeyUpEvent(){
  $clinit_KeyUpEvent = nullMethod;
  TYPE_0 = new DomEvent$Type_0('keyup', new KeyUpEvent_0);
}

function $$init_83(){
}

function $dispatch_0(this$static, handler){
  handler.onKeyUp(this$static);
}

function KeyUpEvent_0(){
  KeyCodeEvent_0.call(this);
  $$init_83();
}

function getType_9(){
  $clinit_KeyUpEvent();
  return TYPE_0;
}

defineSeed(113, 111, {}, KeyUpEvent_0);
_.dispatch_0 = function dispatch_1(handler){
  $dispatch_0(this, dynamicCast(handler, Q$KeyUpHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_2(){
  return TYPE_0;
}
;
var TYPE_0;
function $$init_84(){
}

function $unsafeGet(this$static, key){
  return $unsafeGet_0(this$static.map_0, key);
}

function $unsafePut(this$static, key, value_0){
  $unsafePut_0(this$static.map_0, key, value_0);
}

function PrivateMap_0(){
  Object_1.call(this);
  $$init_84();
  this.map_0 = $cast(create_0());
}

defineSeed(114, 1, {}, PrivateMap_0);
function $unsafeGet_0(this$static, key){
  return this$static[key];
}

function $unsafePut_0(this$static, key, value_0){
  this$static[key] = value_0;
}

function create_0(){
  return $cast(createObject());
}

function $$init_85(){
}

function $dispatch_1(){
  null.nullMethod();
}

function AttachEvent_0(attached){
  GwtEvent_0.call(this);
  $$init_85();
  this , attached;
}

function fire_0(source, attached){
  var event_0;
  if (isNotNull(TYPE_1)) {
    event_0 = new AttachEvent_0(attached);
    source.fireEvent(event_0);
  }
}

defineSeed(116, 106, {}, AttachEvent_0);
_.dispatch_0 = function dispatch_2(handler){
  $dispatch_1(dynamicCast(handler, Q$AttachEvent$Handler));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_1;
}
;
var TYPE_1;
function $$init_86(){
}

function $dispatch_2(this$static, handler){
  handler.onClose(this$static);
}

function CloseEvent_1(target, autoClosed){
  GwtEvent_0.call(this);
  $$init_86();
  this , autoClosed;
  this , target;
}

function fire_1(source, target){
  fire_2(source, target, false);
}

function fire_2(source, target, autoClosed){
  var event_0;
  if (isNotNull(TYPE_2)) {
    event_0 = new CloseEvent_1(target, autoClosed);
    source.fireEvent(event_0);
  }
}

function getType_10(){
  return isNotNull(TYPE_2)?TYPE_2:(TYPE_2 = new GwtEvent$Type_0);
}

defineSeed(117, 106, {}, CloseEvent_1);
_.dispatch_0 = function dispatch_3(handler){
  $dispatch_2(this, dynamicCast(handler, Q$CloseHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_2;
}
;
var TYPE_2;
function $$init_87(){
}

function $dispatch_3(this$static, handler){
  handler.onResize(this$static);
}

function ResizeEvent_0(width_0, height){
  GwtEvent_0.call(this);
  $$init_87();
  this , width_0;
  this , height;
}

function fire_3(source, width_0, height){
  var event_0;
  if (isNotNull(TYPE_3)) {
    event_0 = new ResizeEvent_0(width_0, height);
    source.fireEvent(event_0);
  }
}

function getType_11(){
  isNull(TYPE_3) && (TYPE_3 = new GwtEvent$Type_0);
  return TYPE_3;
}

defineSeed(118, 106, {}, ResizeEvent_0);
_.dispatch_0 = function dispatch_4(handler){
  $dispatch_3(this, dynamicCast(handler, Q$ResizeHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_3;
}
;
var TYPE_3;
function $$init_88(){
}

function $dispatch_4(this$static, handler){
  handler.onValueChange(this$static);
}

function $getValue(this$static){
  return this$static.value_0;
}

function ValueChangeEvent_0(value_0){
  GwtEvent_0.call(this);
  $$init_88();
  this.value_0 = value_0;
}

function fire_4(source, value_0){
  var event_0;
  if (isNotNull(TYPE_4)) {
    event_0 = new ValueChangeEvent_0(value_0);
    source.fireEvent(event_0);
  }
}

function getType_12(){
  isNull(TYPE_4) && (TYPE_4 = new GwtEvent$Type_0);
  return TYPE_4;
}

defineSeed(119, 106, {}, ValueChangeEvent_0);
_.dispatch_0 = function dispatch_5(handler){
  $dispatch_4(this, dynamicCast(handler, Q$ValueChangeHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_4;
}
;
var TYPE_4;
function $$init_89(){
}

function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper_0($addHandler_0(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  $isLive(event_0) || $revive(event_0);
  oldSource = $getSource_0(event_0);
  $overrideSource(event_0, this$static.source);
  try {
    $fireEvent_0(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$UmbrellaException)) {
      e = $e0;
      throw new UmbrellaException_2($getCauses(e));
    }
     else 
      throw unwrap($e0);
  }
   finally {
    jsEquals(oldSource, null)?$kill(event_0):$overrideSource(event_0, oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_1(this$static.eventBus, e);
}

function HandlerManager_0(source){
  HandlerManager_1.call(this, source, false);
}

function HandlerManager_1(source, fireInReverseOrder){
  Object_1.call(this);
  $$init_89();
  this.eventBus = new HandlerManager$Bus_0(fireInReverseOrder);
  this.source = source;
}

defineSeed(120, 1, makeCastMap([Q$HasHandlers]), HandlerManager_0);
_.fireEvent = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
function $$init_90(){
}

function EventBus_0(){
  Object_1.call(this);
  $$init_90();
}

function dispatchEvent_0(event_0, handler){
  event_0.dispatch(handler);
}

function setSourceOfEvent(event_0, source){
  $setSource(event_0, source);
}

defineSeed(123, 1, {});
function $$init_91(this$static){
  this$static.map_0 = new HashMap_0;
}

function $addHandler_0(this$static, type_0, handler){
  return $doAdd(this$static, type_0, null, handler);
}

function $defer(this$static, command){
  isNull(this$static.deferredDeltas) && (this$static.deferredDeltas = new ArrayList_0);
  this$static.deferredDeltas.add_1(command);
}

function $doAdd(this$static, type_0, source, handler){
  if (isNull(type_0)) {
    throw new NullPointerException_1('Cannot add a handler with a null type');
  }
  if (jsEquals(handler, null)) {
    throw new NullPointerException_1('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$enqueueAdd(this$static, type_0, source, handler):$doAddNow(this$static, type_0, source, handler);
  return new SimpleEventBus$1_0(this$static, type_0, source, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l_0;
  l_0 = $ensureHandlerList(this$static, type_0, source);
  l_0.add_1(handler);
}

function $doFire(this$static, event_0, source){
  var causes, e, handler, handlers, it;
  if (isNull(event_0)) {
    throw new NullPointerException_1('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    jsNotEquals(source, null) && setSourceOfEvent(event_0, source);
    handlers = $getDispatchList(this$static, event_0.getAssociatedType(), source);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        dispatchEvent_0(event_0, handler);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, Q$Throwable)) {
          e = $e0;
          isNull(causes) && (causes = new HashSet_0);
          causes.add_1(e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (isNotNull(causes)) {
      throw new UmbrellaException_1(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$enqueueRemove(this$static, type_0, source, handler):$doRemoveNow(this$static, type_0, source, handler);
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l_0, removed;
  l_0 = $getHandlerList(this$static, type_0, source);
  removed = l_0.remove_2(handler);
  removed && l_0.isEmpty() && $prune(this$static, type_0, source);
}

function $enqueueAdd(this$static, type_0, source, handler){
  $defer(this$static, new SimpleEventBus$2_0(this$static, type_0, source, handler));
}

function $enqueueRemove(this$static, type_0, source, handler){
  $defer(this$static, new SimpleEventBus$3_0(this$static, type_0, source, handler));
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_2(type_0), Q$Map);
  if (isNull(sourceMap)) {
    sourceMap = new HashMap_0;
    this$static.map_0.put(type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_2(source), Q$List);
  if (isNull(handlers)) {
    handlers = new ArrayList_0;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $fireEvent_0(this$static, event_0){
  $doFire(this$static, event_0, null);
}

function $getDispatchList(this$static, type_0, source){
  var directHandlers, globalHandlers, rtn;
  directHandlers = $getHandlerList(this$static, type_0, source);
  if (jsEquals(source, null)) {
    return directHandlers;
  }
  globalHandlers = $getHandlerList(this$static, type_0, null);
  rtn = new ArrayList_2(directHandlers);
  rtn.addAll(globalHandlers);
  return rtn;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_2(type_0), Q$Map);
  if (isNull(sourceMap)) {
    return emptyList();
  }
  handlers = dynamicCast(sourceMap.get_2(source), Q$List);
  if (isNull(handlers)) {
    return emptyList();
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (isNotNull(this$static.deferredDeltas)) {
    try {
      for (c$iterator = this$static.deferredDeltas.iterator(); c$iterator.hasNext();) {
        c = dynamicCast(c$iterator.next_0(), Q$SimpleEventBus$Command);
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return this$static.map_0.containsKey(eventKey);
}

function $prune(this$static, type_0, source){
  var pruned, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_2(type_0), Q$Map);
  pruned = dynamicCast(sourceMap.remove_3(source), Q$List);
  if (isNull(pruned)) {
    debugger;
    throw makeAssertionError_Object("Can't prune what wasn't there");
  }
  if (!pruned.isEmpty()) {
    debugger;
    throw makeAssertionError_Object('Pruned unempty list!');
  }
  sourceMap.isEmpty() && this$static.map_0.remove_3(type_0);
}

function SimpleEventBus_0(){
  SimpleEventBus_1.call(this, false);
}

function SimpleEventBus_1(fireInReverseOrder){
  EventBus_0.call(this);
  $$init_91(this);
  this.isReverseOrder = fireInReverseOrder;
}

defineSeed(122, 123, makeCastMap([Q$SimpleEventBus]), SimpleEventBus_0);
_.addHandler = function addHandler(type_0, handler){
  return $addHandler_0(this, type_0, handler);
}
;
_.doRemove = function doRemove(type_0, source, handler){
  $doRemove(this, type_0, source, handler);
}
;
_.fireEvent_0 = function fireEvent_0(event_0){
  $fireEvent_0(this, event_0);
}
;
_.fireEventFromSource = function fireEventFromSource(event_0, source){
  if (jsEquals(source, null)) {
    throw new NullPointerException_1('Cannot fire from a null source');
  }
  $doFire(this, event_0, source);
}
;
_.firingDepth = 0;
_.isReverseOrder = false;
function $$init_92(){
}

function $isEventHandled_1(this$static, eventKey){
  return $isEventHandled_0(this$static, eventKey);
}

function HandlerManager$Bus_0(fireInReverseOrder){
  SimpleEventBus_1.call(this, fireInReverseOrder);
  $$init_92();
}

defineSeed(121, 122, makeCastMap([Q$SimpleEventBus]), HandlerManager$Bus_0);
_.doRemove = function doRemove_0(type_0, source, handler){
  $doRemove(this, type_0, source, handler);
}
;
function $$init_93(){
}

function LegacyHandlerWrapper_0(real){
  Object_1.call(this);
  $$init_93();
  this.real = real;
}

defineSeed(124, 1, makeCastMap([Q$HandlerRegistration]), LegacyHandlerWrapper_0);
_.removeHandler = function removeHandler(){
  this.real.removeHandler();
}
;
function $$init_94(){
}

function $getCauses(this$static){
  return this$static.causes;
}

function UmbrellaException_1(causes){
  RuntimeException_2.call(this, makeMessage(causes), makeCause(causes));
  $$init_94();
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next_0(), Q$Throwable);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next_0(), Q$Throwable);
    first?(first = false):$append_1(b, '; ');
    $append_1(b, t.getMessage());
  }
  return $toString_2(b);
}

defineSeed(126, 19, makeCastMap([Q$UmbrellaException, Q$Serializable, Q$Exception, Q$Throwable]), UmbrellaException_1);
function $$init_95(){
}

function UmbrellaException_2(causes){
  UmbrellaException_1.call(this, causes);
  $$init_95();
}

defineSeed(125, 126, makeCastMap([Q$UmbrellaException, Q$Serializable, Q$Exception, Q$Throwable]), UmbrellaException_2);
function throwIfNull(name_0, value_0){
  if (jsEquals(null, value_0)) {
    throw new NullPointerException_1(name_0 + ' cannot be null');
  }
}

function decodeQueryString(encodedURLComponent){
  throwIfNull('encodedURLComponent', encodedURLComponent);
  return decodeQueryStringImpl(encodedURLComponent);
}

function decodeQueryStringImpl(encodedURLComponent){
  var regexp = /\+/g;
  return decodeURIComponent(encodedURLComponent.replace(regexp, '%20'));
}

function encodeQueryString(decodedURLComponent){
  throwIfNull('decodedURLComponent', decodedURLComponent);
  return encodeQueryStringImpl(decodedURLComponent);
}

function encodeQueryStringImpl(decodedURLComponent){
  var regexp = /%20/g;
  return encodeURIComponent(decodedURLComponent).replace(regexp, '+');
}

function $$init_96(){
}

function $refreshDirection(this$static){
  var dir_0;
  if (isNotNull(this$static.directionEstimator)) {
    dir_0 = this$static.directionEstimator.estimateDirection(this$static.target.getText());
    jsNotEquals(dir_0, this$static.target.getDirection()) && this$static.target.setDirection(dir_0);
  }
}

function $setDirectionEstimator(this$static, directionEstimator){
  this$static.directionEstimator = directionEstimator;
  if (isNull(directionEstimator) != isNull(this$static.handlerRegistration)) {
    if (isNull(directionEstimator)) {
      this$static.handlerRegistration.removeHandler();
      this$static.handlerRegistration = null;
    }
     else {
      this$static.handlerRegistration = this$static.target.addKeyUpHandler(this$static);
    }
  }
  $refreshDirection(this$static);
}

function AutoDirectionHandler_0(target, directionEstimator){
  Object_1.call(this);
  $$init_96();
  this.target = target;
  this.handlerRegistration = null;
  $setDirectionEstimator(this, directionEstimator);
}

function addTo(target, directionEstimator){
  var autoDirHandler;
  autoDirHandler = new AutoDirectionHandler_0(target, directionEstimator);
  return autoDirHandler;
}

function addTo_0(target, enabled){
  return addTo(target, enabled?get_4():null);
}

defineSeed(129, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), AutoDirectionHandler_0);
_.onKeyUp = function onKeyUp(event_0){
  $refreshDirection(this);
}
;
function $clinit_BidiPolicy(){
  $clinit_BidiPolicy = nullMethod;
  new BidiPolicy$BidiPolicyImpl_0;
}

function isBidiEnabled(){
  $clinit_BidiPolicy();
  return $isBidiEnabled();
}

function $$init_97(){
}

function $isBidiEnabled(){
  return hasAnyRTL();
}

function BidiPolicy$BidiPolicyImpl_0(){
  Object_1.call(this);
  $$init_97();
}

defineSeed(131, 1, {}, BidiPolicy$BidiPolicyImpl_0);
function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch ($ordinal(direction)) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        jsNotEquals(getDirectionOnElement(elem), ($clinit_HasDirection$Direction() , DEFAULT)) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = nullMethod;
  RTL = new HasDirection$Direction_0('RTL', 0);
  LTR = new HasDirection$Direction_0('LTR', 1);
  DEFAULT = new HasDirection$Direction_0('DEFAULT', 2);
  $VALUES_6 = initValues(_3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, makeCastMap([Q$Serializable]), Q$HasDirection$Direction, [RTL, LTR, DEFAULT]);
}

function $$init_98(){
}

function HasDirection$Direction_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_98();
}

function valueOf_7(name_0){
  $clinit_HasDirection$Direction();
  return valueOf(($clinit_HasDirection$Direction$Map() , $MAP_6), name_0);
}

function values_7(){
  $clinit_HasDirection$Direction();
  return $VALUES_6;
}

defineSeed(133, 23, makeCastMap([Q$HasDirection$Direction, Q$Serializable, Q$Comparable, Q$Enum]), HasDirection$Direction_0);
var $VALUES_6, DEFAULT, LTR, RTL;
function $clinit_HasDirection$Direction$Map(){
  $clinit_HasDirection$Direction$Map = nullMethod;
  $MAP_6 = createValueOfMap(($clinit_HasDirection$Direction() , $VALUES_6));
}

var $MAP_6;
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = nullMethod;
  instance = new LocaleInfo_0(new LocaleInfoImpl__0, new CldrImpl_0);
}

function $$init_99(){
}

function $isRTL(){
  return $isRTL_0();
}

function LocaleInfo_0(impl, cldr){
  Object_1.call(this);
  $$init_99();
  this.infoImpl = impl;
  this , cldr;
}

function getCurrentLocale(){
  $clinit_LocaleInfo();
  return instance;
}

function hasAnyRTL(){
  $clinit_LocaleInfo();
  return instance.infoImpl.hasAnyRTL();
}

defineSeed(135, 1, {}, LocaleInfo_0);
var instance;
function $$init_100(){
}

function $isRTL_0(){
  return false;
}

function CldrImpl_0(){
  Object_1.call(this);
  $$init_100();
}

defineSeed(136, 1, {}, CldrImpl_0);
function $$init_101(){
}

function LocaleInfoImpl_0(){
  Object_1.call(this);
  $$init_101();
}

defineSeed(137, 1, {});
_.hasAnyRTL = function hasAnyRTL_0(){
  return false;
}
;
function $$init_102(){
}

function LocaleInfoImpl_shared_0(){
  LocaleInfoImpl_0.call(this);
  $$init_102();
}

defineSeed(139, 137, {});
_.hasAnyRTL = function hasAnyRTL_1(){
  return false;
}
;
function $$init_103(){
}

function LocaleInfoImpl__0(){
  LocaleInfoImpl_shared_0.call(this);
  $$init_103();
}

defineSeed(138, 139, {}, LocaleInfoImpl__0);
function $clinit_BidiUtils(){
  $clinit_BidiUtils = nullMethod;
  compile('^[^' + RTL_CHARS + ']*[' + LTR_CHARS + ']');
  FIRST_STRONG_IS_RTL_RE = compile('^[^' + LTR_CHARS + ']*[' + RTL_CHARS + ']');
  HAS_ANY_LTR_RE = compile('[' + LTR_CHARS + ']');
  compile('[' + RTL_CHARS + ']');
  HAS_NUMERALS_RE = compile('\\d');
  compile_0('<[^>]*>|&[^;]+;', 'g');
  INSTANCE_1 = new BidiUtils_0;
  IS_REQUIRED_LTR_RE = compile('^http://.*');
  compile('[' + LTR_CHARS + '][^' + RTL_CHARS + ']*$');
  compile('[' + RTL_CHARS + '][^' + LTR_CHARS + ']*$');
  0.4000000059604645;
  WORD_SEPARATOR_RE = compile('\\s+');
}

function $$init_104(){
}

function $estimateDirection(str){
  var hasWeaklyLtr, i, rtlCount, token, tokens, total;
  rtlCount = 0;
  total = 0;
  hasWeaklyLtr = false;
  tokens = $split(WORD_SEPARATOR_RE, str);
  for (i = 0; i < $length_0(tokens); i++) {
    token = $get_0(tokens, i);
    if ($startsWithRtl(token)) {
      ++rtlCount;
      ++total;
    }
     else 
      $test(IS_REQUIRED_LTR_RE, token)?(hasWeaklyLtr = true):$hasAnyLtr(token)?++total:$test(HAS_NUMERALS_RE, token) && (hasWeaklyLtr = true);
  }
  return total == 0?hasWeaklyLtr?($clinit_HasDirection$Direction() , LTR):($clinit_HasDirection$Direction() , DEFAULT):rtlCount / total > 0.4000000059604645?($clinit_HasDirection$Direction() , RTL):($clinit_HasDirection$Direction() , LTR);
}

function $hasAnyLtr(str){
  return $test(HAS_ANY_LTR_RE, str);
}

function $startsWithRtl(str){
  return $test(FIRST_STRONG_IS_RTL_RE, str);
}

function BidiUtils_0(){
  Object_1.call(this);
  $$init_104();
}

function get_3(){
  $clinit_BidiUtils();
  return INSTANCE_1;
}

defineSeed(140, 1, {}, BidiUtils_0);
var FIRST_STRONG_IS_RTL_RE, HAS_ANY_LTR_RE, HAS_NUMERALS_RE, INSTANCE_1, IS_REQUIRED_LTR_RE, LTR_CHARS = 'A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF', RTL_CHARS = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC', WORD_SEPARATOR_RE;
function $$init_105(){
}

function DirectionEstimator_0(){
  Object_1.call(this);
  $$init_105();
}

defineSeed(141, 1, {});
function $clinit_WordCountDirectionEstimator(){
  $clinit_WordCountDirectionEstimator = nullMethod;
  instance_0 = new WordCountDirectionEstimator_0;
}

function $$init_106(){
}

function WordCountDirectionEstimator_0(){
  DirectionEstimator_0.call(this);
  $$init_106();
}

function get_4(){
  $clinit_WordCountDirectionEstimator();
  return instance_0;
}

defineSeed(142, 141, {}, WordCountDirectionEstimator_0);
_.estimateDirection = function estimateDirection(str){
  return $estimateDirection((get_3() , str));
}
;
var instance_0;
function $$init_107(this$static){
}

function Array_0(){
  Object_1.call(this);
  $$init_107(this);
}

function arraySlice(array, fromIndex, toIndex){
  return array.slice(fromIndex, toIndex);
}

function asArray(array){
  return array;
}

function asArrayType(array){
  return array;
}

function cloneSubrange(array, fromIndex, toIndex){
  var a, result;
  a = asArrayType(array);
  result = arraySlice(a, fromIndex, toIndex);
  initValues(a.___clazz$, getCastableTypeMap(a), a.queryId$, result);
  return asArray(result);
}

function createFrom(array, length_0){
  var a, result;
  a = asArrayType(array);
  result = createFromSeed(0, length_0);
  initValues(a.___clazz$, getCastableTypeMap(a), a.queryId$, result);
  return asArray(result);
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType == 3) {
    for (var i = 0; i < length_0; ++i) {
      array[i] = {l:0, m:0, h:0};
    }
  }
   else if (seedType > 0 && seedType < 3) {
    var value_0 = seedType == 1?0:false;
    for (var i = 0; i < length_0; ++i) {
      array[i] = value_0;
    }
  }
  return array;
}

function initDim(arrayClass, castableTypeMap, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  initValues(arrayClass, castableTypeMap, queryId, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, queryId, array){
  wrapArray(array);
  setClass(array, arrayClass);
  setCastableTypeMap(array, castableTypeMap);
  array.queryId$ = queryId;
  return array;
}

function set_0(array, index_0, value_0){
  return array[index_0] = value_0;
}

function setCheck(array, index_0, value_0){
  if (jsNotEquals(value_0, null)) {
    if (array.queryId$ > 0 && !canCastUnsafe(value_0, array.queryId$)) {
      throw new ArrayStoreException_0;
    }
     else if (array.queryId$ == -1 && isJavaObject(value_0)) {
      throw new ArrayStoreException_0;
    }
     else if (array.queryId$ < -1 && !isJavaScriptObject(value_0) && !canCastUnsafe(value_0, -array.queryId$)) {
      throw new ArrayStoreException_0;
    }
  }
  return set_0(array, index_0, value_0);
}

function setClass(o, clazz){
  o.___clazz$ = clazz;
}

defineSeed(143, 1, {}, Array_0);
_.queryId$ = 0;
function $clinit_Array$ExpandoWrapper(){
  $clinit_Array$ExpandoWrapper = nullMethod;
  expandoNames_0 = makeEmptyJsArray();
  expandoValues_0 = makeEmptyJsArray();
  initExpandos(new Array_0, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value_0;
  for (var name_0 in protoType) {
    if (value_0 = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value_0;
      ++i;
    }
  }
}

function makeEmptyJsArray(){
  return [];
}

function wrapArray(array){
  $clinit_Array$ExpandoWrapper();
  wrapArray_0(array, expandoNames_0, expandoValues_0);
}

function wrapArray_0(array, expandoNames, expandoValues){
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(src_0, dstId){
  return src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function canCastUnsafe(src_0, dstId){
  return src_0.castableTypeMap$ && src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (jsNotEquals(src_0, null) && !canCastUnsafe(src_0, dstId)) {
    throw new ClassCastException_0;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (jsNotEquals(src_0, null) && isJavaObject(src_0)) {
    throw new ClassCastException_0;
  }
  return src_0;
}

function getNullMethod(){
  return nullMethod;
}

function instanceOf(src_0, dstId){
  return jsNotEquals(src_0, null) && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return jsNotEquals(src_0, null) && isJavaScriptObject(src_0);
}

function isJavaObject(src_0){
  return isNonStringJavaObject(src_0) || isJavaString(src_0);
}

function isJavaScriptObject(src_0){
  return !isNonStringJavaObject(src_0) && !isJavaString(src_0);
}

function isJavaString(src_0){
  return canCast(src_0, 1);
}

function isNonStringJavaObject(src_0){
  return jsEquals(getTypeMarker(src_0), getNullMethod());
}

function isNotNull(src_0){
  return !!src_0;
}

function isNull(src_0){
  return !src_0;
}

function jsEquals(a, b){
  return a == b;
}

function jsNotEquals(a, b){
  return a != b;
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function narrow_char(x_0){
  return x_0 & 65535;
}

function narrow_int(x_0){
  return ~~x_0;
}

function init_0(){
  isStatsAvailable() && onModuleStart('com.google.gwt.useragent.client.UserAgentAsserter');
  $onModuleLoad_0(new UserAgentAsserter_0);
  isStatsAvailable() && onModuleStart('com.google.gwt.user.client.DocumentModeAsserter');
  $onModuleLoad(new DocumentModeAsserter_0);
  isStatsAvailable() && onModuleStart('fr.emmenemoi.gwt.widgets.jwplayer.example.client.Gwtjwplayerwrapper');
  $onModuleLoad_1(new Gwtjwplayerwrapper_0);
}

function getCachableJavaScriptException(e_0){
  var jse = e_0.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException_0(e_0);
    try {
      e_0.__gwt$exception = jse;
    }
     catch (e) {
    }
  }
  return jse;
}

function makeAssertionError(){
  return new AssertionError_0;
}

function makeAssertionError_Object(message){
  return new AssertionError_1(message);
}

function unwrap(e){
  var jse;
  if (instanceOf(e, Q$JavaScriptException)) {
    jse = dynamicCast(e, Q$JavaScriptException);
    if ($isThrownSet(jse)) {
      return $getThrown(jse);
    }
  }
  return e;
}

function wrap(e){
  if (instanceOf(e, Q$Throwable)) {
    return e;
  }
  return jsEquals(e, null)?new JavaScriptException_0(null):getCachableJavaScriptException(e);
}

function isStatsAvailable(){
  return !!$stats;
}

function onModuleStart(mainClassName){
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

function getCastableTypeMap(o){
  return o.castableTypeMap$;
}

function getTypeMarker(o){
  return o.typeMarker$;
}

function setCastableTypeMap(o, castableTypeMap){
  o.castableTypeMap$ = castableTypeMap;
}

function $$init_109(this$static){
  this$static.impl = new LayoutImpl_0;
  this$static.layers = new ArrayList_0;
}

function $adjustHorizontalConstraints(this$static, parentWidth, l_0){
  var leftPx, rightPx, widthPx;
  leftPx = l_0.left * $getUnitSize(this$static, l_0.leftUnit, false);
  rightPx = l_0.right * $getUnitSize(this$static, l_0.rightUnit, false);
  widthPx = l_0.width_0 * $getUnitSize(this$static, l_0.widthUnit, false);
  if (l_0.setLeft && !l_0.setTargetLeft) {
    l_0.setLeft = false;
    if (l_0.setWidth) {
      l_0.setTargetRight = true;
      l_0.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l_0.targetRightUnit, false);
    }
     else {
      l_0.setTargetWidth = true;
      l_0.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l_0.targetWidthUnit, false);
    }
  }
   else if (l_0.setWidth && !l_0.setTargetWidth) {
    l_0.setWidth = false;
    if (l_0.setLeft) {
      l_0.setTargetRight = true;
      l_0.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l_0.targetRightUnit, false);
    }
     else {
      l_0.setTargetLeft = true;
      l_0.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l_0.targetLeftUnit, false);
    }
  }
   else if (l_0.setRight && !l_0.setTargetRight) {
    l_0.setRight = false;
    if (l_0.setWidth) {
      l_0.setTargetLeft = true;
      l_0.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l_0.targetLeftUnit, false);
    }
     else {
      l_0.setTargetWidth = true;
      l_0.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l_0.targetWidthUnit, false);
    }
  }
  l_0.setLeft = l_0.setTargetLeft;
  l_0.setRight = l_0.setTargetRight;
  l_0.setWidth = l_0.setTargetWidth;
  l_0.leftUnit = l_0.targetLeftUnit;
  l_0.rightUnit = l_0.targetRightUnit;
  l_0.widthUnit = l_0.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l_0){
  var bottomPx, heightPx, topPx;
  topPx = l_0.top_0 * $getUnitSize(this$static, l_0.topUnit, true);
  bottomPx = l_0.bottom * $getUnitSize(this$static, l_0.bottomUnit, true);
  heightPx = l_0.height * $getUnitSize(this$static, l_0.heightUnit, true);
  if (l_0.setTop && !l_0.setTargetTop) {
    l_0.setTop = false;
    if (l_0.setHeight) {
      l_0.setTargetBottom = true;
      l_0.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l_0.targetBottomUnit, true);
    }
     else {
      l_0.setTargetHeight = true;
      l_0.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l_0.targetHeightUnit, true);
    }
  }
   else if (l_0.setHeight && !l_0.setTargetHeight) {
    l_0.setHeight = false;
    if (l_0.setTop) {
      l_0.setTargetBottom = true;
      l_0.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l_0.targetBottomUnit, true);
    }
     else {
      l_0.setTargetTop = true;
      l_0.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l_0.targetTopUnit, true);
    }
  }
   else if (l_0.setBottom && !l_0.setTargetBottom) {
    l_0.setBottom = false;
    if (l_0.setHeight) {
      l_0.setTargetTop = true;
      l_0.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l_0.targetTopUnit, true);
    }
     else {
      l_0.setTargetHeight = true;
      l_0.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l_0.targetHeightUnit, true);
    }
  }
  l_0.setTop = l_0.setTargetTop;
  l_0.setBottom = l_0.setTargetBottom;
  l_0.setHeight = l_0.setTargetHeight;
  l_0.topUnit = l_0.targetTopUnit;
  l_0.bottomUnit = l_0.targetBottomUnit;
  l_0.heightUnit = l_0.targetHeightUnit;
}

function $attachChild(this$static, child, before, userObject){
  var container, layer;
  container = $attachChild_1(this$static.parentElem, child, before);
  layer = new Layout$Layer_0(this$static, container, child, userObject);
  this$static.layers.add_1(layer);
  return layer;
}

function $attachChild_0(this$static, child, userObject){
  return $attachChild(this$static, child, null, userObject);
}

function $fillParent(this$static){
  $fillParent_0(this$static.parentElem);
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static){
  $layout_0(this$static, 0);
}

function $layout_0(this$static, duration){
  $layout_1(this$static, duration, null);
}

function $layout_1(this$static, duration, callback){
  var l_0, l$iterator, l$iterator0, parentHeight, parentWidth;
  isNotNull(this$static.animation) && $cancel(this$static.animation);
  if (duration == 0) {
    for (l$iterator = this$static.layers.iterator(); l$iterator.hasNext();) {
      l_0 = dynamicCast(l$iterator.next_0(), Q$Layout$Layer);
      l_0.left = l_0.sourceLeft = l_0.targetLeft;
      l_0.top_0 = l_0.sourceTop = l_0.targetTop;
      l_0.right = l_0.sourceRight = l_0.targetRight;
      l_0.bottom = l_0.sourceBottom = l_0.targetBottom;
      l_0.width_0 = l_0.sourceWidth = l_0.targetWidth;
      l_0.height = l_0.sourceHeight = l_0.targetHeight;
      l_0.setLeft = l_0.setTargetLeft;
      l_0.setTop = l_0.setTargetTop;
      l_0.setRight = l_0.setTargetRight;
      l_0.setBottom = l_0.setTargetBottom;
      l_0.setWidth = l_0.setTargetWidth;
      l_0.setHeight = l_0.setTargetHeight;
      l_0.leftUnit = l_0.targetLeftUnit;
      l_0.topUnit = l_0.targetTopUnit;
      l_0.rightUnit = l_0.targetRightUnit;
      l_0.bottomUnit = l_0.targetBottomUnit;
      l_0.widthUnit = l_0.targetWidthUnit;
      l_0.heightUnit = l_0.targetHeightUnit;
      $layout_2(l_0);
    }
    $finalizeLayout();
    isNotNull(callback) && callback.onAnimationComplete();
    return;
  }
  parentWidth = $getClientWidth(this$static.parentElem);
  parentHeight = $getClientHeight(this$static.parentElem);
  for (l$iterator0 = this$static.layers.iterator(); l$iterator0.hasNext();) {
    l_0 = dynamicCast(l$iterator0.next_0(), Q$Layout$Layer);
    $adjustHorizontalConstraints(this$static, parentWidth, l_0);
    $adjustVerticalConstraints(this$static, parentHeight, l_0);
  }
  this$static.animation = new Layout$1_0(this$static, callback);
  $run_0(this$static.animation, duration, this$static.parentElem);
}

function $onAttach(){
  $onAttach_0();
}

function $onDetach(){
  $onDetach_0();
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  this$static.layers.remove_2(layer);
}

function Layout_0(parent_0){
  Object_1.call(this);
  $$init_109(this);
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineSeed(152, 1, {}, Layout_0);
function $$init_110(){
}

function $onComplete(this$static){
  this$static.this$0.animation = null;
  $layout(this$static.this$0);
  isNotNull(this$static.val$callback) && this$static.val$callback.onAnimationComplete();
}

function Layout$1_0(this$0, val$callback){
  this.this$0 = this$0;
  this.val$callback = val$callback;
  Animation_0.call(this);
  $$init_110();
}

defineSeed(153, 3, {}, Layout$1_0);
_.onCancel = function onCancel_0(){
  $onComplete(this);
}
;
_.onComplete = function onComplete_0(){
  $onComplete(this);
}
;
_.onUpdate = function onUpdate(progress){
  var l_0, l$iterator;
  for (l$iterator = this.this$0.layers.iterator(); l$iterator.hasNext();) {
    l_0 = dynamicCast(l$iterator.next_0(), Q$Layout$Layer);
    l_0.setTargetLeft && (l_0.left = l_0.sourceLeft + (l_0.targetLeft - l_0.sourceLeft) * progress);
    l_0.setTargetRight && (l_0.right = l_0.sourceRight + (l_0.targetRight - l_0.sourceRight) * progress);
    l_0.setTargetTop && (l_0.top_0 = l_0.sourceTop + (l_0.targetTop - l_0.sourceTop) * progress);
    l_0.setTargetBottom && (l_0.bottom = l_0.sourceBottom + (l_0.targetBottom - l_0.sourceBottom) * progress);
    l_0.setTargetWidth && (l_0.width_0 = l_0.sourceWidth + (l_0.targetWidth - l_0.sourceWidth) * progress);
    l_0.setTargetHeight && (l_0.height = l_0.sourceHeight + (l_0.targetHeight - l_0.sourceHeight) * progress);
    $layout_2(l_0);
    isNotNull(this.val$callback) && this.val$callback.onLayout(l_0, progress);
  }
  $finalizeLayout();
}
;
function $clinit_Layout$Alignment(){
  $clinit_Layout$Alignment = nullMethod;
  BEGIN = new Layout$Alignment_0('BEGIN', 0);
  END = new Layout$Alignment_0('END', 1);
  STRETCH = new Layout$Alignment_0('STRETCH', 2);
  $VALUES_7 = initValues(_3Lcom_google_gwt_layout_client_Layout$Alignment_2_classLit, makeCastMap([Q$Serializable]), Q$Layout$Alignment, [BEGIN, END, STRETCH]);
}

function $$init_111(){
}

function Layout$Alignment_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_111();
}

function valueOf_8(name_0){
  $clinit_Layout$Alignment();
  return valueOf(($clinit_Layout$Alignment$Map() , $MAP_7), name_0);
}

function values_8(){
  $clinit_Layout$Alignment();
  return $VALUES_7;
}

defineSeed(154, 23, makeCastMap([Q$Layout$Alignment, Q$Serializable, Q$Comparable, Q$Enum]), Layout$Alignment_0);
var $VALUES_7, BEGIN, END, STRETCH;
function $clinit_Layout$Alignment$Map(){
  $clinit_Layout$Alignment$Map = nullMethod;
  $MAP_7 = createValueOfMap(($clinit_Layout$Alignment() , $VALUES_7));
}

var $MAP_7;
function $$init_112(this$static){
  this$static.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this$static.targetTopUnit = ($clinit_Style$Unit() , PX);
  this$static.targetRightUnit = ($clinit_Style$Unit() , PX);
  this$static.targetBottomUnit = ($clinit_Style$Unit() , PX);
  this$static.hPos = ($clinit_Layout$Alignment() , STRETCH);
  this$static.vPos = ($clinit_Layout$Alignment() , STRETCH);
}

function $getUserObject(this$static){
  return this$static.userObject;
}

function Layout$Layer_0(this$0, container, child, userObject){
  this , this$0;
  Object_1.call(this);
  $$init_112(this);
  this.container = container;
  this.child = child;
  this.userObject = userObject;
}

defineSeed(156, 1, makeCastMap([Q$Layout$Layer]), Layout$Layer_0);
_.bottom = 0;
_.height = 0;
_.left = 0;
_.right = 0;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.top_0 = 0;
_.visible = true;
_.width_0 = 0;
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = nullMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), ($clinit_Style$Unit() , CM));
  $appendChild($getBody(get_2()), fixedRuler);
}

function $$init_113(){
}

function $attachChild_1(parent_0, child, before){
  var beforeContainer, container;
  container = $createDivElement(get_2());
  $appendChild(container, child);
  $setPosition($getStyle(container), ($clinit_Style$Position() , ABSOLUTE));
  $setOverflow($getStyle(container), ($clinit_Style$Overflow() , HIDDEN_0));
  $fillParent_0(child);
  beforeContainer = null;
  if (isNotNull(before)) {
    beforeContainer = $getParentElement(before);
    if (jsNotEquals($getParentElement(beforeContainer), parent_0)) {
      debugger;
      throw makeAssertionError_Object('Element to insert before must be a sibling');
    }
  }
  $insertBefore(parent_0, container, beforeContainer);
  return container;
}

function $fillParent_0(elem){
  var style;
  style = $getStyle(elem);
  $setPosition(style, ($clinit_Style$Position() , ABSOLUTE));
  $setLeft(style, 0, ($clinit_Style$Unit() , PX));
  $setTop(style, 0, ($clinit_Style$Unit() , PX));
  $setRight(style, 0, ($clinit_Style$Unit() , PX));
  $setBottom(style, 0, ($clinit_Style$Unit() , PX));
}

function $finalizeLayout(){
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (isNull(unit)) {
    return 1;
  }
  switch ($ordinal(unit)) {
    case 1:
      return (vertical?$getClientHeight(parent_0):$getClientWidth(parent_0)) / 100;
    case 2:
      return $getOffsetWidth(this$static.relativeRuler) / 10;
    case 3:
      return $getOffsetHeight(this$static.relativeRuler) / 10;
    case 7:
      return $getOffsetWidth(fixedRuler) * 0.1;
    case 8:
      return $getOffsetWidth(fixedRuler) * 0.01;
    case 6:
      return $getOffsetWidth(fixedRuler) * 0.254;
    case 4:
      return $getOffsetWidth(fixedRuler) * 0.00353;
    case 5:
      return $getOffsetWidth(fixedRuler) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  $setPosition($getStyle(parent_0), ($clinit_Style$Position() , RELATIVE));
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), ($clinit_Style$Unit() , EX)));
}

function $layout_2(layer){
  var style;
  style = $getStyle(layer.container);
  layer.visible?$clearDisplay(style):$setDisplay(style, ($clinit_Style$Display() , NONE));
  $setProperty_0(style, 'left', layer.setLeft?layer.left + layer.leftUnit.getType():'');
  $setProperty_0(style, 'top', layer.setTop?layer.top_0 + layer.topUnit.getType():'');
  $setProperty_0(style, 'right', layer.setRight?layer.right + layer.rightUnit.getType():'');
  $setProperty_0(style, 'bottom', layer.setBottom?layer.bottom + layer.bottomUnit.getType():'');
  $setProperty_0(style, 'width', layer.setWidth?layer.width_0 + layer.widthUnit.getType():'');
  $setProperty_0(style, 'height', layer.setHeight?layer.height + layer.heightUnit.getType():'');
  style = $getStyle(layer.child);
  switch ($ordinal(layer.hPos)) {
    case 0:
      $setLeft(style, 0, ($clinit_Style$Unit() , PX));
      $clearRight(style);
      break;
    case 1:
      $clearLeft(style);
      $setRight(style, 0, ($clinit_Style$Unit() , PX));
      break;
    case 2:
      $setLeft(style, 0, ($clinit_Style$Unit() , PX));
      $setRight(style, 0, ($clinit_Style$Unit() , PX));
  }
  switch ($ordinal(layer.vPos)) {
    case 0:
      $setTop(style, 0, ($clinit_Style$Unit() , PX));
      $clearBottom(style);
      break;
    case 1:
      $clearTop(style);
      $setBottom(style, 0, ($clinit_Style$Unit() , PX));
      break;
    case 2:
      $setTop(style, 0, ($clinit_Style$Unit() , PX));
      $setBottom(style, 0, ($clinit_Style$Unit() , PX));
  }
}

function $onAttach_0(){
}

function $onDetach_0(){
}

function $removeChild_1(container, child){
  var style;
  $removeFromParent(container);
  jsEquals($getParentElement(child), container) && $removeFromParent(child);
  style = $getStyle(child);
  $clearPosition(style);
  $clearLeft(style);
  $clearTop(style);
  $clearWidth(style);
  $clearHeight(style);
}

function LayoutImpl_0(){
  $clinit_LayoutImpl();
  Object_1.call(this);
  $$init_113();
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $createDivElement(get_2());
  $setInnerHTML(ruler, '&nbsp;');
  style = $getStyle(ruler);
  $setPosition(style, ($clinit_Style$Position() , ABSOLUTE));
  $setZIndex(style, -32767);
  $setTop(style, -20, heightUnit);
  $setWidth(style, 10, widthUnit);
  $setHeight(style, 10, heightUnit);
  $setVisibility(style, ($clinit_Style$Visibility() , HIDDEN_1));
  $set(($clinit_State() , HIDDEN), ruler, initValues(_3Ljava_lang_Boolean_2_classLit, makeCastMap([Q$Serializable]), Q$Boolean, [valueOf_12(true)]));
  return ruler;
}

defineSeed(157, 1, {}, LayoutImpl_0);
var fixedRuler;
function $$init_114(){
}

function LevelImplNull_0(){
  Object_1.call(this);
  $$init_114();
}

defineSeed(158, 1, {}, LevelImplNull_0);
function $$init_115(){
}

function LoggerImplNull_0(){
  Object_1.call(this);
  $$init_115();
}

defineSeed(159, 1, {}, LoggerImplNull_0);
_.getLoggerHelper = function getLoggerHelper(name_0){
  return new LoggerWithExposedConstructor_0('');
}
;
_.log_1 = function log_5(level, msg){
}
;
_.setName = function setName(newName){
}
;
function $clinit_Logger(){
  $clinit_Logger = nullMethod;
  staticImpl = new LoggerImplNull_0;
}

function $$init_116(){
}

function $log_0(this$static, level, msg){
  this$static.impl.log_1(level, msg);
}

function Logger_0(name_0){
  Object_1.call(this);
  $$init_116();
  this.impl = new LoggerImplNull_0;
  this.impl.setName(name_0);
}

function getLogger(name_0){
  $clinit_Logger();
  return staticImpl.getLoggerHelper(name_0);
}

defineSeed(161, 1, {});
var staticImpl;
function $$init_117(){
}

function LoggerWithExposedConstructor_0(name_0){
  $clinit_Logger();
  Logger_0.call(this, name_0);
  $$init_117();
}

defineSeed(160, 161, {}, LoggerWithExposedConstructor_0);
function $split(this$static, input_0){
  return input_0.split(this$static);
}

function $test(this$static, input_0){
  return this$static.test(input_0);
}

function compile(pattern){
  return new RegExp(pattern);
}

function compile_0(pattern, flags){
  return new RegExp(pattern, flags);
}

function $$init_118(){
}

function AbstractRenderer_0(){
  Object_1.call(this);
  $$init_118();
}

defineSeed(164, 1, {});
function $$init_119(){
}

function $parse(object){
  return object.toString$();
}

function PassthroughParser_0(){
  Object_1.call(this);
  $$init_119();
}

function instance_1(){
  isNull(INSTANCE_2) && (INSTANCE_2 = new PassthroughParser_0);
  return INSTANCE_2;
}

defineSeed(165, 1, {}, PassthroughParser_0);
_.parse_0 = function parse_0(object){
  return $parse(object);
}
;
var INSTANCE_2;
function $$init_120(){
}

function PassthroughRenderer_0(){
  AbstractRenderer_0.call(this);
  $$init_120();
}

function instance_2(){
  isNull(INSTANCE_3) && (INSTANCE_3 = new PassthroughRenderer_0);
  return INSTANCE_3;
}

defineSeed(166, 164, {}, PassthroughRenderer_0);
var INSTANCE_3;
function $clinit_DOM(){
  $clinit_DOM = nullMethod;
  impl_1 = new DOMImplWebkit_2;
}

function appendChild(parent_0, child){
  $clinit_DOM();
  if (isPotential(parent_0)) {
    debugger;
    throw makeAssertionError_Object('Cannot append to a PotentialElement');
  }
  $appendChild(parent_0, resolve(child));
}

function asOld(elem){
  $clinit_DOM();
  return elem;
}

function createElement(tagName){
  $clinit_DOM();
  return $cast($createElement_0(get_2(), tagName));
}

function dispatchEvent_1(evt, elem){
  $clinit_DOM();
  var eventListener;
  eventListener = getEventListener(elem);
  if (isNull(eventListener)) {
    return false;
  }
  dispatchEvent_2(evt, elem, eventListener);
  return true;
}

function dispatchEvent_2(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  dispatchEventImpl(evt, elem, listener);
  currentEvent = prevCurrentEvent;
}

function dispatchEventImpl(evt, elem, listener){
  jsEquals(elem, sCaptureElem) && (eventGetType(evt) == 8192 && (sCaptureElem = null));
  listener.onBrowserEvent(evt);
}

function eventGetType(evt){
  $clinit_DOM();
  return $eventGetTypeInt(evt);
}

function getEventListener(elem){
  $clinit_DOM();
  return getEventListener_1(elem);
}

function getEventsSunk(elem){
  $clinit_DOM();
  return $getEventsSunk(elem);
}

function getParent(elem){
  $clinit_DOM();
  return asOld($getParentElement(elem));
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fireNativePreviewEvent();
  if (!ret && isNotNull(evt)) {
    $stopPropagation(evt);
    $preventDefault(evt);
  }
  return ret;
}

function setElementProperty(elem, prop, value_0){
  $clinit_DOM();
  $setPropertyString(elem, prop, value_0);
}

function setEventListener(elem, listener){
  $clinit_DOM();
  setEventListener_0(elem, listener);
}

function sinkBitlessEvent(elem, eventTypeName){
  $clinit_DOM();
  impl_1.sinkBitlessEvent(elem, eventTypeName);
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  impl_1.sinkEvents(elem, eventBits);
}

var currentEvent = null, impl_1, sCaptureElem;
function $$init_121(){
}

function $onModuleLoad(){
  var allowedModes, currentMode, i, impl, message, severity;
  impl = new DocumentModeAsserter_DocumentModeProperty_0;
  severity = impl.getDocumentModeSeverity();
  if (jsEquals(severity, ($clinit_DocumentModeAsserter$Severity() , IGNORE))) {
    return;
  }
  currentMode = $getCompatMode(get_2());
  allowedModes = impl.getAllowedDocumentModes();
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_1(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_1('CSS1Compat', allowedModes[0]) && $equals_1('BackCompat', currentMode)?(message = "GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;'):(message = "Your *.gwt.xml module configuration prohibits the use of the current doucment rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.");
  if (jsEquals(severity, ($clinit_DocumentModeAsserter$Severity() , ERROR))) {
    throw new RuntimeException_1(message);
  }
  log_0(message);
}

function DocumentModeAsserter_0(){
  Object_1.call(this);
  $$init_121();
}

defineSeed(168, 1, {}, DocumentModeAsserter_0);
function $clinit_DocumentModeAsserter$Severity(){
  $clinit_DocumentModeAsserter$Severity = nullMethod;
  ERROR = new DocumentModeAsserter$Severity_0('ERROR', 0);
  IGNORE = new DocumentModeAsserter$Severity_0('IGNORE', 1);
  WARN = new DocumentModeAsserter$Severity_0('WARN', 2);
  $VALUES_8 = initValues(_3Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit, makeCastMap([Q$Serializable]), Q$DocumentModeAsserter$Severity, [ERROR, IGNORE, WARN]);
}

function $$init_122(){
}

function DocumentModeAsserter$Severity_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_122();
}

function valueOf_9(name_0){
  $clinit_DocumentModeAsserter$Severity();
  return valueOf(($clinit_DocumentModeAsserter$Severity$Map() , $MAP_8), name_0);
}

function values_9(){
  $clinit_DocumentModeAsserter$Severity();
  return $VALUES_8;
}

defineSeed(169, 23, makeCastMap([Q$DocumentModeAsserter$Severity, Q$Serializable, Q$Comparable, Q$Enum]), DocumentModeAsserter$Severity_0);
var $VALUES_8, ERROR, IGNORE, WARN;
function $clinit_DocumentModeAsserter$Severity$Map(){
  $clinit_DocumentModeAsserter$Severity$Map = nullMethod;
  $MAP_8 = createValueOfMap(($clinit_DocumentModeAsserter$Severity() , $VALUES_8));
}

var $MAP_8;
function $$init_123(){
}

function DocumentModeAsserter_DocumentModeProperty_0(){
  Object_1.call(this);
  $$init_123();
}

defineSeed(171, 1, {}, DocumentModeAsserter_DocumentModeProperty_0);
_.getAllowedDocumentModes = function getAllowedDocumentModes(){
  return initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, ['CSS1Compat']);
}
;
_.getDocumentModeSeverity = function getDocumentModeSeverity(){
  return $clinit_DocumentModeAsserter$Severity() , WARN;
}
;
function fireNativePreviewEvent(){
  return fire_5(handlers_0);
}

function getEventListener_0(elem){
  return getEventListener(elem);
}

function getTypeInt(typeName){
  return $eventGetTypeInt_0(($clinit_DOM() , impl_1 , typeName));
}

var handlers_0;
function fire_5(handlers){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (isNotNull(TYPE_5) && isNotNull(handlers) && $isEventHandled(handlers, TYPE_5)) {
    lastIsCanceled = null.nullField;
    lastIsConsumed = null.nullField;
    lastIsFirstHandler = null.nullField;
    lastNativeEvent = null.nullField;
    null.nullMethod();
    null.nullMethod();
    $fireEvent(handlers, singleton);
    ret = !(null.nullMethod() && !null.nullMethod());
    singleton , lastIsCanceled;
    singleton , lastIsConsumed;
    singleton , lastIsFirstHandler;
    singleton , lastNativeEvent;
    return ret;
  }
  return true;
}

var TYPE_5, singleton;
function $clinit_History(){
  $clinit_History = nullMethod;
  impl_2 = new HistoryImplSafari_0;
  if (impl_2.init()) {
    scheduleDispose(new History$1_0);
  }
   else {
    impl_2 = null;
    log_0("Unable to initialize the history subsystem; did you include the history frame in your host page? Try <iframe src=\"javascript:''\" id='__gwt_historyFrame' style='position:absolute;width:0;height:0;border:0'><\/iframe>");
  }
}

function addValueChangeHandler(handler){
  $clinit_History();
  return isNotNull(impl_2)?$addValueChangeHandler(impl_2, handler):null;
}

function fireCurrentHistoryState(){
  $clinit_History();
  var token;
  if (isNotNull(impl_2)) {
    token = getToken();
    $fireHistoryChangedImpl(impl_2, token);
  }
}

function getToken(){
  $clinit_History();
  return isNotNull(impl_2)?getToken_0():'';
}

function newItem(historyToken, issueEvent){
  $clinit_History();
  isNotNull(impl_2) && $newItem(impl_2, historyToken, issueEvent);
}

var impl_2;
function $$init_124(){
}

function History$1_0(){
  Object_1.call(this);
  $$init_124();
}

defineSeed(176, 1, {}, History$1_0);
_.dispose = function dispose_0(){
  $dispose_0(($clinit_History() , impl_2));
}
;
function $clinit_Window(){
  $clinit_Window = nullMethod;
  impl_3 = new WindowImpl_0;
}

function addCloseHandler(handler){
  $clinit_Window();
  maybeInitializeCloseHandlers();
  return addHandler_0(getType_10(), handler);
}

function addHandler_0(type_0, handler){
  return $addHandler(getHandlers(), type_0, handler);
}

function addResizeHandler(handler){
  $clinit_Window();
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler_0(getType_11(), handler);
}

function addWindowClosingHandler(handler){
  $clinit_Window();
  maybeInitializeCloseHandlers();
  return addHandler_0(getType_13(), handler);
}

function alert_0(msg){
  $clinit_Window();
  $wnd.alert(msg);
}

function confirm_0(msg){
  $clinit_Window();
  return $wnd.confirm(msg);
}

function fireEvent_1(event_0){
  isNotNull(handlers_1) && $fireEvent(handlers_1, event_0);
}

function getClientHeight(){
  return $getClientHeight_0(get_2());
}

function getClientWidth(){
  return $getClientWidth_0(get_2());
}

function getHandlers(){
  isNull(handlers_1) && (handlers_1 = new Window$WindowHandlers_0);
  return handlers_1;
}

function maybeInitializeCloseHandlers(){
  if (isClient() && !closeHandlersInitialized) {
    $initWindowCloseHandler(impl_3);
    scheduleDispose(new Window$1_0);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (isClient() && !resizeHandlersInitialized) {
    $initWindowResizeHandler(impl_3);
    scheduleDispose(new Window$2_0);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  $clinit_Window();
  closeHandlersInitialized && fire_1(getHandlers(), null);
}

function onClosing(){
  $clinit_Window();
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent_0;
    fireEvent_1(event_0);
    return $getMessage(event_0);
  }
  return null;
}

function onResize(){
  $clinit_Window();
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = getClientWidth();
    height = getClientHeight();
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_3(getHandlers(), width_0, height);
    }
  }
}

var closeHandlersInitialized = false, handlers_1, impl_3, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $$init_125(){
}

function Window$1_0(){
  Object_1.call(this);
  $$init_125();
}

defineSeed(178, 1, {}, Window$1_0);
_.dispose = function dispose_1(){
  $disposeWindowCloseHandlers(($clinit_Window() , impl_3));
}
;
function $$init_126(){
}

function Window$2_0(){
  Object_1.call(this);
  $$init_126();
}

defineSeed(179, 1, {}, Window$2_0);
_.dispose = function dispose_2(){
  $disposeWindowResizeHandlers(($clinit_Window() , impl_3));
}
;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = nullMethod;
  TYPE_6 = new GwtEvent$Type_0;
}

function $$init_127(this$static){
}

function $dispatch_5(this$static, handler){
  handler.onWindowClosing(this$static);
}

function $getMessage(this$static){
  return this$static.message_0;
}

function $setMessage(this$static, message){
  this$static.message_0 = message;
}

function Window$ClosingEvent_0(){
  $clinit_Window$ClosingEvent();
  GwtEvent_0.call(this);
  $$init_127(this);
}

function getType_13(){
  $clinit_Window$ClosingEvent();
  return TYPE_6;
}

defineSeed(180, 106, {}, Window$ClosingEvent_0);
_.dispatch_0 = function dispatch_6(handler){
  $dispatch_5(this, dynamicCast(handler, Q$Window$ClosingHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_7(){
  return TYPE_6;
}
;
_.message_0 = null;
var TYPE_6;
function $$init_128(){
}

function Window$WindowHandlers_0(){
  HandlerManager_0.call(this, null);
  $$init_128();
}

defineSeed(181, 120, makeCastMap([Q$HasHandlers]), Window$WindowHandlers_0);
function $$init_129(){
}

function $eventGetTypeInt(evt){
  return $eventGetTypeInt_0($getType(evt));
}

function $eventGetTypeInt_0(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    default:return -1;
  }
}

function $getEventsSunk(elem){
  return elem.__eventBits || 0;
}

function $maybeInitializeEventSystem(this$static){
  if (!eventSystemIsInitialized) {
    this$static.initEventSystem();
    scheduleDispose(new DOMImpl$1_0(this$static));
    eventSystemIsInitialized = true;
  }
}

function DOMImpl_2(){
  Object_1.call(this);
  $$init_129();
}

function cleanupDOM(dom){
  var allElements, elem, i, listener, userElem;
  allElements = $getElementsByTagName(get_2(), '*');
  for (i = 0; i < $getLength(allElements); i++) {
    elem = $getItem(allElements, i);
    userElem = elem;
    listener = getEventListener_1(userElem);
    if (isNotNull(listener)) {
      dom.sinkEvents(userElem, 0);
      setEventListener_0(userElem, null);
    }
    maybeRemoveDisposableEvent(elem);
  }
}

function getEventListener_1(elem){
  var maybeListener = elem.__listener;
  return isMyListener(maybeListener)?maybeListener:null;
}

function isMyListener(object){
  return !instanceOfJso(object) && instanceOf(object, Q$EventListener);
}

function maybeRemoveDisposableEvent(elem){
  var diEvents = elem.__gwt_disposeEvent;
  if (diEvents) {
    for (var i = 0, l_0 = diEvents.length; i < l_0; i++) {
      var diEvent = diEvents[i];
      elem.removeEventListener(diEvent.event, diEvent.handler, diEvent.capture);
      elem.__gwt_disposeEvent = null;
    }
  }
}

function setEventListener_0(elem, listener){
  elem.__listener = listener;
}

defineSeed(182, 1, {});
var eventSystemIsInitialized = false;
function $$init_130(){
}

function DOMImpl$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_130();
}

defineSeed(183, 1, {}, DOMImpl$1_0);
_.dispose = function dispose_3(){
  this.this$0.disposeEventSystem();
  cleanupDOM(this.this$0);
}
;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = nullMethod;
  bitlessEventDispatchers = getBitlessEventDispatchers();
  captureEventDispatchers = getCaptureEventDispatchers();
}

function $$init_131(){
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  if (chMask & 1)
    elem.onclick = bits & 1?dispatchEvent_3:null;
  if (chMask & 2)
    elem.ondblclick = bits & 2?dispatchEvent_3:null;
  if (chMask & 4)
    elem.onmousedown = bits & 4?dispatchEvent_3:null;
  if (chMask & 8)
    elem.onmouseup = bits & 8?dispatchEvent_3:null;
  if (chMask & 16)
    elem.onmouseover = bits & 16?dispatchEvent_3:null;
  if (chMask & 32)
    elem.onmouseout = bits & 32?dispatchEvent_3:null;
  if (chMask & 64)
    elem.onmousemove = bits & 64?dispatchEvent_3:null;
  if (chMask & 128)
    elem.onkeydown = bits & 128?dispatchEvent_3:null;
  if (chMask & 256)
    elem.onkeypress = bits & 256?dispatchEvent_3:null;
  if (chMask & 512)
    elem.onkeyup = bits & 512?dispatchEvent_3:null;
  if (chMask & 1024)
    elem.onchange = bits & 1024?dispatchEvent_3:null;
  if (chMask & 2048)
    elem.onfocus = bits & 2048?dispatchEvent_3:null;
  if (chMask & 4096)
    elem.onblur = bits & 4096?dispatchEvent_3:null;
  if (chMask & 8192)
    elem.onlosecapture = bits & 8192?dispatchEvent_3:null;
  if (chMask & 16384)
    elem.onscroll = bits & 16384?dispatchEvent_3:null;
  if (chMask & 32768)
    elem.onload = bits & 32768?dispatchUnhandledEvent:null;
  if (chMask & 65536)
    elem.onerror = bits & 65536?dispatchEvent_3:null;
  if (chMask & 131072)
    elem.onmousewheel = bits & 131072?dispatchEvent_3:null;
  if (chMask & 262144)
    elem.oncontextmenu = bits & 262144?dispatchEvent_3:null;
  if (chMask & 524288)
    elem.onpaste = bits & 524288?dispatchEvent_3:null;
  if (chMask & 1048576)
    elem.ontouchstart = bits & 1048576?dispatchEvent_3:null;
  if (chMask & 2097152)
    elem.ontouchmove = bits & 2097152?dispatchEvent_3:null;
  if (chMask & 4194304)
    elem.ontouchend = bits & 4194304?dispatchEvent_3:null;
  if (chMask & 8388608)
    elem.ontouchcancel = bits & 8388608?dispatchEvent_3:null;
  if (chMask & 16777216)
    elem.ongesturestart = bits & 16777216?dispatchEvent_3:null;
  if (chMask & 33554432)
    elem.ongesturechange = bits & 33554432?dispatchEvent_3:null;
  if (chMask & 67108864)
    elem.ongestureend = bits & 67108864?dispatchEvent_3:null;
}

function DOMImplStandard_2(){
  DOMImpl_2.call(this);
  $$init_131();
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  var cancelled;
  cancelled = !previewEvent(evt);
  if (cancelled || isNull(captureElem)) {
    return;
  }
  dispatchEvent_1(evt, captureElem) && $stopPropagation(evt);
}

function dispatchDragEvent(evt){
  $preventDefault(evt);
  dispatchEvent_4(evt);
}

function dispatchEvent_4(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (isNull(element)) {
    return;
  }
  dispatchEvent_2(evt, $getNodeType(element) != 1?null:element, getEventListener_1(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $cast($getCurrentEventTarget(evt));
  $setPropertyString(element, '__gwtLastUnhandledEvent', $getType(evt));
  dispatchEvent_4(evt);
}

function getBitlessEventDispatchers(){
  return {_default_:dispatchEvent_4, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
}

function getCaptureEventDispatchers(){
  return {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $cast($getCurrentEventTarget(evt));
  while (isNotNull(curElem) && isNull(getEventListener_1(curElem))) {
    curElem = $cast($getParentNode(curElem));
  }
  return curElem;
}

defineSeed(184, 182, {});
_.disposeEventSystem = function disposeEventSystem(){
  var foreach = foreach_0;
  foreach(captureEvents, function(e, fn){
    $wnd.removeEventListener(e, fn, true);
  }
  );
}
;
_.initEventSystem = function initEventSystem(){
  dispatchEvent_3 = $entry(dispatchEvent_4);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}
;
_.sinkBitlessEvent = function sinkBitlessEvent_0(elem, eventTypeName){
  $maybeInitializeEventSystem(this);
  $sinkBitlessEventImpl(elem, eventTypeName);
}
;
_.sinkEvents = function sinkEvents_0(elem, bits){
  $maybeInitializeEventSystem(this);
  $sinkEventsImpl(elem, bits);
}
;
var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_3, dispatchUnhandledEvent;
function $$init_132(){
}

function DOMImplStandardBase_2(){
  DOMImplStandard_2.call(this);
  $$init_132();
}

defineSeed(185, 184, {});
function $$init_133(){
}

function DOMImplWebkit_2(){
  $clinit_DOMImplStandard();
  DOMImplStandardBase_2.call(this);
  $$init_133();
}

defineSeed(186, 185, {}, DOMImplWebkit_2);
function foreach_0(map_0, fn){
  for (var e in map_0) {
    if (map_0.hasOwnProperty(e)) {
      fn(e, map_0[e]);
    }
  }
}

function $$init_134(this$static){
  this$static.handlers = new HandlerManager_0(null);
}

function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, getType_12(), handler);
}

function $dispose_0(this$static){
  $wnd.onhashchange = this$static.oldHandler;
}

function $fireHistoryChangedImpl(this$static, newToken){
  fire_4(this$static, newToken);
}

function $nativeUpdateOnEvent(){
}

function $newItem(this$static, historyToken, issueEvent){
  historyToken = jsEquals(historyToken, null)?'':historyToken;
  if (!$equals_1(historyToken, getToken_0())) {
    setToken(historyToken);
    this$static.nativeUpdate(historyToken);
    issueEvent && $fireHistoryChangedImpl(this$static, historyToken);
  }
}

function HistoryImpl_0(){
  Object_1.call(this);
  $$init_134(this);
}

function getToken_0(){
  return jsEquals(token_1, null)?'':token_1;
}

function setToken(token){
  token_1 = token;
}

defineSeed(188, 1, makeCastMap([Q$HasHandlers]));
_.decodeFragment = function decodeFragment(encodedFragment){
  return decodeURI(encodedFragment.replace('%23', '#'));
}
;
_.encodeFragment = function encodeFragment(fragment){
  return encodeURI(fragment).replace('#', '%23');
}
;
_.fireEvent = function fireEvent_2(event_0){
  $fireEvent(this.handlers, event_0);
}
;
_.init = function init_1(){
  var token_0 = '';
  var hash_0 = $wnd.location.hash;
  if (hash_0.length > 0) {
    token_0 = this.decodeFragment(hash_0.substring(1));
  }
  setToken(token_0);
  var historyImpl = this;
  historyImpl.oldHandler = $wnd.onhashchange;
  $wnd.onhashchange = $entry(function(){
    var token = '', hash = $wnd.location.hash;
    if (hash.length > 0) {
      token = historyImpl.decodeFragment(hash.substring(1));
    }
    historyImpl.newItemOnEvent(token);
    var oldHandler = historyImpl.oldHandler;
    if (oldHandler) {
      oldHandler();
    }
  }
  );
  return true;
}
;
_.nativeUpdate = function nativeUpdate(historyToken){
  $wnd.location.hash = this.encodeFragment(historyToken);
}
;
_.newItemOnEvent = function newItemOnEvent(historyToken){
  historyToken = jsEquals(historyToken, null)?'':historyToken;
  if (!$equals_1(historyToken, getToken_0())) {
    setToken(historyToken);
    $nativeUpdateOnEvent();
    $fireHistoryChangedImpl(this, historyToken);
  }
}
;
var token_1 = '';
function $$init_135(){
}

function HistoryImplTimer_0(){
  HistoryImpl_0.call(this);
  $$init_135();
}

defineSeed(190, 188, makeCastMap([Q$HasHandlers]));
_.init = function init_2(){
  var token_0 = '';
  var hash_0 = $wnd.location.hash;
  if (hash_0.length > 0) {
    token_0 = this.decodeFragment(hash_0.substring(1));
  }
  setToken(token_0);
  var historyImpl = this;
  var checkHistory = $entry(function(){
    var token = '', hash = $wnd.location.hash;
    if (hash.length > 0) {
      token = historyImpl.decodeFragment(hash.substring(1));
    }
    historyImpl.newItemOnEvent(token);
  }
  );
  var checkHistoryCycle = function(){
    setTimeout_0(checkHistoryCycle, 250);
    checkHistory();
  }
  ;
  checkHistoryCycle();
  return true;
}
;
function $$init_136(){
}

function HistoryImplSafari_0(){
  HistoryImplTimer_0.call(this);
  $$init_136();
}

defineSeed(189, 190, makeCastMap([Q$HasHandlers]), HistoryImplSafari_0);
_.nativeUpdate = function nativeUpdate_0(historyToken){
  $wnd.location = $wnd.location.href.split('#')[0] + '#' + this.encodeFragment(historyToken);
}
;
function $$init_137(){
}

function $disposeWindowCloseHandlers(this$static){
  $wnd.onbeforeunload = this$static.oldOnBeforeUnload;
  $wnd.onunload = this$static.oldOnUnload;
}

function $disposeWindowResizeHandlers(this$static){
  $wnd.onresize = this$static.oldOnResize;
}

function $initWindowCloseHandler(this$static){
  var oldOnBeforeUnload = this$static.oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = this$static.oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      onClosed();
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(this$static){
  var oldOnResize = this$static.oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function WindowImpl_0(){
  Object_1.call(this);
  $$init_137();
}

defineSeed(191, 1, {}, WindowImpl_0);
function $clinit_UIObject(){
  $clinit_UIObject = nullMethod;
  'gwt-debug-';
  "This UIObject's element is not set; you may be missing a call to either Composite.initWidget() or UIObject.setElement()";
  'Element may only be set once';
  new UIObject$DebugIdImpl_0;
  'Style names cannot be empty';
  'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.';
}

function $$init_138(){
}

function $addStyleName(this$static, style){
  $setStyleName_0(this$static, style, true);
}

function $getElement(this$static){
  if (isNull(this$static.element)) {
    debugger;
    throw makeAssertionError_Object("This UIObject's element is not set; you may be missing a call to either Composite.initWidget() or UIObject.setElement()");
  }
  return asOld(this$static.element);
}

function $getStyleElement(this$static){
  return $getElement(this$static);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, asOld(elem));
}

function $setElement_0(this$static, elem){
  if (!(isNull(this$static.element) || isPotential(this$static.element))) {
    debugger;
    throw makeAssertionError_Object('Element may only be set once');
  }
  this$static.element = elem;
}

function $setStyleName(this$static, style){
  setStyleName($getStyleElement(this$static), style);
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName_0($getStyleElement(this$static), style, add_0);
}

function $setVisible(this$static, visible){
  setVisible($getElement(this$static), visible);
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent($getElement(this$static), eventTypeName);
}

function $sinkEvents(this$static, eventBitsToAdd){
  sinkEvents($getElement(this$static), eventBitsToAdd | getEventsSunk($getElement(this$static)));
}

function UIObject_0(){
  Object_1.call(this);
  $$init_138();
}

function setStyleName(elem, styleName){
  $setClassName(elem, styleName);
}

function setStyleName_0(elem, style, add_0){
  if (isNull(elem)) {
    throw new RuntimeException_1('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if ($length_1(style) == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  if (visible) {
    elem.removeAttribute('aria-hidden');
  }
   else {
    elem.setAttribute('aria-hidden', 'true');
  }
}

defineSeed(196, 1, makeCastMap([Q$HasVisibility, Q$UIObject]));
_.toString$ = function toString_6(){
  if (isNull(this.element)) {
    return '(null handle)';
  }
  return $getString($getElement(this));
}
;
function $$init_139(){
}

function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  if (isNull(handler)) {
    debugger;
    throw makeAssertionError_Object('handler must not be null');
  }
  if (isNull(type_0)) {
    debugger;
    throw makeAssertionError_Object('type must not be null');
  }
  typeInt = getTypeInt($getName(type_0));
  typeInt == -1?$sinkBitlessEvent(this$static, $getName(type_0)):$sinkEvents_0(this$static, typeInt);
  return $addHandler($ensureHandlers(this$static), type_0, handler);
}

function $createHandlerManager(this$static){
  return new HandlerManager_0(this$static);
}

function $ensureHandlers(this$static){
  return isNull(this$static.handlerManager)?(this$static.handlerManager = $createHandlerManager(this$static)):this$static.handlerManager;
}

function $fireEvent_1(this$static, event_0){
  isNotNull(this$static.handlerManager) && $fireEvent(this$static.handlerManager, event_0);
}

function $getLayoutData(this$static){
  return this$static.layoutData;
}

function $getParent(this$static){
  return this$static.parent_0;
}

function $isAttached(this$static){
  return this$static.attached;
}

function $isOrWasAttached(this$static){
  return this$static.eventsToSink == -1;
}

function $onAttach_1(this$static){
  var bitsToAdd;
  if ($isAttached(this$static)) {
    throw new IllegalStateException_1("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  setEventListener($getElement(this$static), this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && $sinkEvents_0(this$static, bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch (eventGetType(event_0)) {
    case 16:
    case 32:
      related = $cast($getRelatedEventTarget(event_0));
      if (isNotNull(related) && $isOrHasChild($getElement(this$static), related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, $getElement(this$static));
}

function $onDetach_1(this$static){
  if (!$isAttached(this$static)) {
    throw new IllegalStateException_1("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
    fire_0(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      setEventListener($getElement(this$static), null);
      this$static.attached = false;
    }
  }
}

function $onLoad(){
}

function $onUnload(){
}

function $removeFromParent_0(this$static){
  if (isNull(this$static.parent_0)) {
    isInDetachList(this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, Q$HasWidgets)) {
    dynamicCast(this$static.parent_0, Q$HasWidgets).remove_0(this$static);
  }
   else if (isNotNull(this$static.parent_0)) {
    throw new IllegalStateException_1("This widget's parent does not implement HasWidgets");
  }
}

function $setLayoutData(this$static, layoutData){
  this$static.layoutData = layoutData;
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (isNull(parent_0)) {
    try {
      if (isNotNull(oldParent) && $isAttached(oldParent)) {
        this$static.onDetach();
        if ($isAttached(this$static)) {
          debugger;
          throw makeAssertionError_Object('Failure of ' + $getName_0(this$static.___clazz$) + ' to call super.onDetach()');
        }
      }
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (isNotNull(oldParent)) {
      throw new IllegalStateException_1('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    if ($isAttached(parent_0)) {
      this$static.onAttach();
      if (!$isAttached(this$static)) {
        debugger;
        throw makeAssertionError_Object('Failure of ' + $getName_0(this$static.___clazz$) + ' to call super.onAttach()');
      }
    }
  }
}

function $sinkEvents_0(this$static, eventBitsToAdd){
  $isOrWasAttached(this$static)?$sinkEvents(this$static, eventBitsToAdd):(this$static.eventsToSink |= eventBitsToAdd);
}

function Widget_0(){
  $clinit_UIObject();
  UIObject_0.call(this);
  $$init_139();
}

function asWidgetOrNull(w){
  return isNull(w)?null:w.asWidget();
}

defineSeed(195, 196, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.asWidget = function asWidget(){
  return this;
}
;
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent = function fireEvent_3(event_0){
  $fireEvent_1(this, event_0);
}
;
_.onAttach = function onAttach(){
  $onAttach_1(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach_1(this);
}
;
_.onLoad = function onLoad(){
  $onLoad();
}
;
_.onUnload = function onUnload(){
  $onUnload();
}
;
_.attached = false;
_.eventsToSink = 0;
function $$init_140(){
}

function $add(this$static, child){
  this$static.add_0(asWidgetOrNull(child));
}

function $adopt(this$static, child){
  if (isNotNull($getParent(child))) {
    debugger;
    throw makeAssertionError();
  }
  $setParent(child, this$static);
}

function $clear(this$static){
  var it;
  it = this$static.iterator();
  while (it.hasNext()) {
    it.next_0();
    it.remove_1();
  }
}

function $orphan(this$static, child){
  if (jsNotEquals($getParent(child), this$static)) {
    debugger;
    throw makeAssertionError();
  }
  $setParent(child, null);
}

function Panel_0(){
  Widget_0.call(this);
  $$init_140();
}

defineSeed(194, 195, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget]));
_.add_0 = function add_1(child){
  throw new UnsupportedOperationException_1('This panel does not support no-arg add()');
}
;
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
function $$init_141(this$static){
  this$static.children = new WidgetCollection_0(this$static);
}

function $add_0(this$static, child, container){
  $add_1(this$static, child, asOld(container));
}

function $add_1(this$static, child, container){
  $removeFromParent_0(child);
  $add_5($getChildren(this$static), child);
  appendChild(container, $getElement(child));
  $adopt(this$static, child);
}

function $getChildren(this$static){
  return this$static.children;
}

function $getWidgetCount(this$static){
  return $size($getChildren(this$static));
}

function $remove(this$static, w){
  var elem;
  if (jsNotEquals($getParent(w), this$static)) {
    return false;
  }
  try {
    $orphan(this$static, w);
  }
   finally {
    elem = $getElement(w);
    $removeChild(getParent(elem), elem);
    $remove_1($getChildren(this$static), w);
  }
  return true;
}

function ComplexPanel_0(){
  Panel_0.call(this);
  $$init_141(this);
}

defineSeed(193, 194, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget]));
_.iterator = function iterator_0(){
  return $iterator($getChildren(this));
}
;
_.remove_0 = function remove_0(w){
  return $remove(this, w);
}
;
function $$init_142(){
}

function $add_2(this$static, w){
  $add_1(this$static, w, $getElement(this$static));
}

function AbsolutePanel_0(elem){
  $clinit_UIObject();
  ComplexPanel_0.call(this);
  $$init_142();
  $setElement(this, elem);
}

function changeToStaticPositioning(elem){
  $setProperty_0($getStyle(elem), 'left', '');
  $setProperty_0($getStyle(elem), 'top', '');
  $setProperty_0($getStyle(elem), 'position', '');
}

defineSeed(192, 193, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget]));
_.add_0 = function add_2(w){
  $add_2(this, w);
}
;
_.remove_0 = function remove_1(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning($getElement(w));
  return removed;
}
;
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = nullMethod;
  attachCommand = new AttachDetachException$1_0;
  detachCommand = new AttachDetachException$2_0;
}

function $$init_143(){
}

function AttachDetachException_0(causes){
  UmbrellaException_2.call(this, causes);
  $$init_143();
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), Q$Widget);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, Q$Throwable)) {
        e = $e0;
        isNull(caught) && (caught = new HashSet_0);
        caught.add_1(e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (isNotNull(caught)) {
    throw new AttachDetachException_0(caught);
  }
}

defineSeed(197, 125, makeCastMap([Q$UmbrellaException, Q$Serializable, Q$Exception, Q$Throwable]), AttachDetachException_0);
var attachCommand, detachCommand;
function $$init_144(){
}

function AttachDetachException$1_0(){
  Object_1.call(this);
  $$init_144();
}

defineSeed(198, 1, {}, AttachDetachException$1_0);
_.execute_2 = function execute_3(w){
  w.onAttach();
}
;
function $$init_145(){
}

function AttachDetachException$2_0(){
  Object_1.call(this);
  $$init_145();
}

defineSeed(199, 1, {}, AttachDetachException$2_0);
_.execute_2 = function execute_4(w){
  w.onDetach();
}
;
function $clinit_FocusWidget(){
  $clinit_FocusWidget = nullMethod;
  $clinit_UIObject();
  impl_4 = getFocusImplForWidget();
}

function $$init_146(){
}

function $getTabIndex_0(this$static){
  return $getTabIndex_1($getElement(this$static));
}

function $setFocus(this$static, focused){
  focused?impl_4.focus_0($getElement(this$static)):impl_4.blur_0($getElement(this$static));
}

function $setTabIndex_0(this$static, index_0){
  $setTabIndex_1($getElement(this$static), index_0);
}

function FocusWidget_0(elem){
  $clinit_FocusWidget();
  Widget_0.call(this);
  $$init_146();
  $setElement(this, elem);
}

defineSeed(202, 195, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.addClickHandler = function addClickHandler(handler){
  return $addDomHandler(this, handler, getType_8());
}
;
_.addKeyUpHandler = function addKeyUpHandler(handler){
  return $addDomHandler(this, handler, getType_9());
}
;
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach_1(this);
  tabIndex = $getTabIndex_0(this);
  -1 == tabIndex && $setTabIndex_0(this, 0);
}
;
var impl_4;
function $$init_147(){
}

function $setHTML(this$static, html){
  $setInnerHTML($getElement(this$static), html);
}

function ButtonBase_0(elem){
  FocusWidget_0.call(this, elem);
  $$init_147();
}

defineSeed(201, 202, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.getText = function getText(){
  return $getInnerText($getElement(this));
}
;
function $$init_148(){
}

function Button_0(){
  ButtonBase_0.call(this, $createPushButtonElement(get_2()));
  $$init_148();
  $setStyleName(this, 'gwt-Button');
}

function Button_1(html){
  $clinit_FocusWidget();
  Button_0.call(this);
  $setHTML(this, html);
}

defineSeed(200, 201, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Button_1);
function $clinit_DirectionalTextHelper(){
  $clinit_DirectionalTextHelper = nullMethod;
  DEFAULT_DIRECTION_ESTIMATOR = get_4();
}

function $$init_149(){
}

function $getTextDirection(this$static){
  return this$static.textDir;
}

function $getTextOrHtml(this$static, isHtml){
  var elem;
  elem = this$static.isSpanWrapped?$getFirstChildElement(this$static.element):this$static.element;
  return isHtml?$getInnerHTML(elem):$getInnerText(elem);
}

function $setDirection(this$static, direction){
  setDirectionOnElement(this$static.element, direction);
  this$static.initialElementDir = direction;
  $setInnerTextOrHtml(this$static, $getTextOrHtml(this$static, true), true);
  this$static.isSpanWrapped = false;
  this$static.textDir = this$static.initialElementDir;
  this$static , true;
}

function $setInnerTextOrHtml(this$static, content_0, isHtml){
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
}

function DirectionalTextHelper_0(element, isElementInline){
  $clinit_DirectionalTextHelper();
  Object_1.call(this);
  $$init_149();
  this.element = element;
  this , isElementInline;
  this.isSpanWrapped = false;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
  this , true;
}

defineSeed(203, 1, {}, DirectionalTextHelper_0);
_.isSpanWrapped = false;
var DEFAULT_DIRECTION_ESTIMATOR;
function $$init_150(){
}

function $add_3(this$static, widget, elem){
  $add_0(this$static, widget, elem);
}

function $add_4(this$static, widget, id_0){
  var elem;
  elem = $getElementById_0(this$static, id_0);
  if (isNull(elem)) {
    throw new NoSuchElementException_1(id_0);
  }
  $add_3(this$static, widget, elem);
}

function $attachToDomAndGetElement(this$static, id_0){
  var child, origParent, origSibling;
  if (isNull(hiddenDiv)) {
    hiddenDiv = $createDivElement(get_2());
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
  origParent = $getParentElement($getElement(this$static));
  origSibling = $getNextSiblingElement($getElement(this$static));
  $appendChild(hiddenDiv, $getElement(this$static));
  child = $getElementById(get_2(), id_0);
  isNotNull(origParent)?$insertBefore(origParent, $getElement(this$static), origSibling):$removeChild(hiddenDiv, $getElement(this$static));
  return child;
}

function $getElementById_0(this$static, id_0){
  var elem;
  elem = $isAttached(this$static)?$getElementById(get_2(), id_0):$attachToDomAndGetElement(this$static, id_0);
  return asOld(elem);
}

function HTMLPanel_0(html){
  $clinit_UIObject();
  ComplexPanel_0.call(this);
  $$init_150();
  $setElement(this, $createDivElement(get_2()));
  $setInnerHTML($getElement(this), html);
}

defineSeed(204, 193, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget]), HTMLPanel_0);
_.add_0 = function add_3(widget){
  $add_1(this, widget, $getElement(this));
}
;
var hiddenDiv;
function $clinit_HasAutoHorizontalAlignment(){
  $clinit_HasAutoHorizontalAlignment = nullMethod;
  ALIGN_CONTENT_START = new HasHorizontalAlignment$AutoHorizontalAlignmentConstant_0;
  new HasHorizontalAlignment$AutoHorizontalAlignmentConstant_0;
}

var ALIGN_CONTENT_START;
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = nullMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant_0(($clinit_Style$TextAlign() , CENTER).getCssName());
  new HasHorizontalAlignment$HorizontalAlignmentConstant_0(($clinit_Style$TextAlign() , JUSTIFY).getCssName());
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant_0(($clinit_Style$TextAlign() , LEFT).getCssName());
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant_0(($clinit_Style$TextAlign() , RIGHT).getCssName());
  ALIGN_LOCALE_START = isClient() && $isRTL(getCurrentLocale())?ALIGN_RIGHT:ALIGN_LEFT;
  ALIGN_LOCALE_END = isClient() && $isRTL(getCurrentLocale())?ALIGN_LEFT:ALIGN_RIGHT;
  ALIGN_LOCALE_START;
}

var ALIGN_LEFT, ALIGN_LOCALE_END, ALIGN_LOCALE_START, ALIGN_RIGHT;
function $$init_151(){
}

function HasHorizontalAlignment$AutoHorizontalAlignmentConstant_0(){
  Object_1.call(this);
  $$init_151();
}

defineSeed(205, 1, {}, HasHorizontalAlignment$AutoHorizontalAlignmentConstant_0);
function $$init_152(){
}

function $getTextAlignString(this$static){
  return this$static.textAlignString;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant_0(textAlignString){
  HasHorizontalAlignment$AutoHorizontalAlignmentConstant_0.call(this);
  $$init_152();
  this.textAlignString = textAlignString;
}

function endOf(direction){
  return jsEquals(direction, ($clinit_HasDirection$Direction() , LTR))?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):jsEquals(direction, ($clinit_HasDirection$Direction() , RTL))?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_END);
}

function startOf(direction){
  return jsEquals(direction, ($clinit_HasDirection$Direction() , LTR))?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):jsEquals(direction, ($clinit_HasDirection$Direction() , RTL))?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_START);
}

defineSeed(206, 205, makeCastMap([Q$HasHorizontalAlignment$HorizontalAlignmentConstant]), HasHorizontalAlignment$HorizontalAlignmentConstant_0);
function $$init_153(){
}

function $updateHorizontalAlignment(this$static){
  var align_0;
  isNull(this$static.autoHorizontalAlignment)?(align_0 = null):instanceOf(this$static.autoHorizontalAlignment, Q$HasHorizontalAlignment$HorizontalAlignmentConstant)?(align_0 = dynamicCast(this$static.autoHorizontalAlignment, Q$HasHorizontalAlignment$HorizontalAlignmentConstant)):(align_0 = jsEquals(this$static.autoHorizontalAlignment, ($clinit_HasAutoHorizontalAlignment() , ALIGN_CONTENT_START))?startOf($getTextDirection(this$static.directionalTextHelper)):endOf($getTextDirection(this$static.directionalTextHelper)));
  if (jsNotEquals(align_0, this$static.horzAlign)) {
    this$static.horzAlign = align_0;
    $setProperty_0($getStyle($getElement(this$static)), 'textAlign', isNull(this$static.horzAlign)?'':$getTextAlignString(this$static.horzAlign));
  }
}

function LabelBase_0(element, isElementInline){
  Widget_0.call(this);
  $$init_153();
  if (!$equalsIgnoreCase(isElementInline?'span':'div', $getTagName(element))) {
    debugger;
    throw makeAssertionError();
  }
  $setElement(this, element);
  this.directionalTextHelper = new DirectionalTextHelper_0($getElement(this), isElementInline);
}

function LabelBase_1(inline){
  $clinit_UIObject();
  LabelBase_0.call(this, inline?$createSpanElement(get_2()):$createDivElement(get_2()), inline);
}

defineSeed(208, 195, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
function $clinit_Label(){
  $clinit_Label = nullMethod;
  $clinit_UIObject();
  $clinit_DirectionalTextHelper() , DEFAULT_DIRECTION_ESTIMATOR;
}

function $$init_154(){
}

function Label_0(){
  $clinit_Label();
  LabelBase_1.call(this, false);
  $$init_154();
  $setStyleName(this, 'gwt-Label');
}

defineSeed(207, 208, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Label_0);
_.addClickHandler = function addClickHandler_0(handler){
  return $addDomHandler(this, handler, getType_8());
}
;
_.getDirection = function getDirection(){
  return getDirectionOnElement($getElement(this));
}
;
_.getText = function getText_0(){
  return $getTextOrHtml(this.directionalTextHelper, false);
}
;
_.setDirection = function setDirection(direction){
  $setDirection(this.directionalTextHelper, direction);
  $updateHorizontalAlignment(this);
}
;
function $$init_155(){
}

function $doBeforeLayout(){
}

function $schedule_0(this$static, duration, callback){
  this$static.duration = duration;
  this$static.callback = callback;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    get_1().scheduleFinally(this$static);
  }
}

function LayoutCommand_0(layout){
  Object_1.call(this);
  $$init_155();
  this.layout = layout;
}

defineSeed(209, 1, {}, LayoutCommand_0);
_.execute_1 = function execute_5(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  $doBeforeLayout();
  $layout_1(this.layout, this.duration, new LayoutCommand$1_0(this));
}
;
_.canceled = false;
_.duration = 0;
_.scheduled = false;
function $$init_156(){
}

function LayoutCommand$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_156();
}

defineSeed(210, 1, {}, LayoutCommand$1_0);
_.onAnimationComplete = function onAnimationComplete(){
  isNotNull(this.this$0.callback) && this.this$0.callback.onAnimationComplete();
}
;
_.onLayout = function onLayout(layer, progress){
  var child;
  child = dynamicCast($getUserObject(layer), Q$Widget);
  instanceOf(child, Q$RequiresResize) && dynamicCast(child, Q$RequiresResize).onResize_0();
  isNotNull(this.this$0.callback) && this.this$0.callback.onLayout(layer, progress);
}
;
function $$init_157(){
}

function $animate(this$static, duration){
  $animate_0(this$static, duration, null);
}

function $animate_0(this$static, duration, callback){
  $schedule_0(this$static.layoutCmd, duration, callback);
}

function $getLayout(this$static){
  return this$static.layout;
}

function $insert(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent_0(widget);
  $insert_0($getChildren(this$static), widget, beforeIndex);
  layer = $attachChild_0(this$static.layout, $getElement(widget), widget);
  $setLayoutData(widget, layer);
  $adopt(this$static, widget);
  $animate(this$static, 0);
}

function $onResize(this$static){
  var child, child$iterator;
  for (child$iterator = $getChildren(this$static).iterator(); child$iterator.hasNext();) {
    child = dynamicCast(child$iterator.next_0(), Q$Widget);
    instanceOf(child, Q$RequiresResize) && dynamicCast(child, Q$RequiresResize).onResize_0();
  }
}

function LayoutPanel_0(){
  ComplexPanel_0.call(this);
  $$init_157();
  $setElement(this, $createDivElement(get_2()));
  this.layout = new Layout_0($getElement(this));
  this.layoutCmd = new LayoutCommand_0(this.layout);
}

defineSeed(211, 193, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget]));
_.add_0 = function add_4(widget){
  $insert(this, widget, $getWidgetCount(this));
}
;
_.onAttach = function onAttach_1(){
  $onAttach_1(this);
  $onAttach();
}
;
_.onDetach = function onDetach_0(){
  $onDetach_1(this);
  $onDetach();
}
;
_.onResize_0 = function onResize_0(){
  $onResize(this);
}
;
_.remove_0 = function remove_2(w){
  var removed;
  removed = $remove(this, w);
  removed && $removeChild_0(this.layout, dynamicCast($getLayoutData(w), Q$Layout$Layer));
  return removed;
}
;
function $clinit_PotentialElement(){
  $clinit_PotentialElement = nullMethod;
  declareShim();
}

function $resolve(this$static){
  return this$static.__gwt_resolve?this$static.__gwt_resolve():this$static;
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function isPotential(o){
  $clinit_PotentialElement();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function resolve(maybePotential){
  $clinit_PotentialElement();
  return $resolve($cast(maybePotential));
}

function $$init_158(){
}

function RootLayoutPanel_0(){
  LayoutPanel_0.call(this);
  $$init_158();
  addResizeHandler(new RootLayoutPanel$1_0(this));
}

function get_5(){
  $clinit_UIObject();
  if (isNull(singleton_0)) {
    singleton_0 = new RootLayoutPanel_0;
    $add_2(get_6(), singleton_0);
  }
  return singleton_0;
}

defineSeed(213, 211, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget]), RootLayoutPanel_0);
_.onLoad = function onLoad_0(){
  $onAttach($getLayout(this));
  $fillParent($getLayout(this));
}
;
var singleton_0;
function $$init_159(){
}

function RootLayoutPanel$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_159();
}

defineSeed(214, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), RootLayoutPanel$1_0);
_.onResize = function onResize_1(event_0){
  $onResize(this.this$0);
}
;
function $clinit_RootPanel(){
  $clinit_RootPanel = nullMethod;
  $clinit_UIObject();
  maybeDetachCommand = new RootPanel$1_0;
  rootPanels = new HashMap_0;
  widgetsToDetach = new HashSet_0;
}

function $$init_160(){
}

function RootPanel_0(elem){
  AbsolutePanel_0.call(this, elem);
  $$init_160();
  this.onAttach();
}

function detachNow(widget){
  $clinit_RootPanel();
  if (!widgetsToDetach.contains_0(widget)) {
    debugger;
    throw makeAssertionError_Object('detachNow() called on a widget not currently in the detach list');
  }
  try {
    widget.onDetach();
  }
   finally {
    widgetsToDetach.remove_2(widget);
  }
}

function detachOnWindowClose(widget){
  if (widgetsToDetach.contains_0(widget)) {
    debugger;
    throw makeAssertionError_Object('detachOnUnload() called twice for the same widget');
  }
  if (isElementChildOfWidget($getElement(widget))) {
    debugger;
    throw makeAssertionError_Object('A widget that has an existing parent widget may not be added to the detach list');
  }
  widgetsToDetach.add_1(widget);
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    widgetsToDetach.clear_0();
    rootPanels.clear_0();
  }
}

function get_6(){
  $clinit_RootPanel();
  return get_7(null);
}

function get_7(id_0){
  var elem, rp;
  rp = dynamicCast(rootPanels.get_2(id_0), Q$RootPanel);
  elem = null;
  if (jsNotEquals(id_0, null)) {
    if (isNull(elem = $getElementById(get_2(), id_0))) {
      return null;
    }
  }
  if (isNotNull(rp)) {
    if (isNull(elem) || jsEquals($getElement(rp), elem)) {
      return rp;
    }
  }
  if (rootPanels.size_1() == 0) {
    hookWindowClosing();
    $isRTL(getCurrentLocale()) && setDirectionOnElement(getRootElement(), ($clinit_HasDirection$Direction() , RTL));
  }
  isNull(elem)?(rp = new RootPanel$DefaultRootPanel_0):(rp = new RootPanel_0(elem));
  rootPanels.put(id_0, rp);
  detachOnWindowClose(rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

function getRootElement(){
  return $doc;
}

function hookWindowClosing(){
  scheduleDispose(new RootPanel$2_0);
  addCloseHandler(new RootPanel$3_0);
}

function isElementChildOfWidget(element){
  var body_0;
  element = $getParentElement(element);
  body_0 = $getBody(get_2());
  while (isNotNull(element) && jsNotEquals(body_0, element)) {
    if (isNotNull(getEventListener_0(element))) {
      return true;
    }
    element = $cast($getParentElement(element));
  }
  return false;
}

function isInDetachList(widget){
  $clinit_RootPanel();
  return widgetsToDetach.contains_0(widget);
}

defineSeed(215, 192, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RootPanel, Q$UIObject, Q$Widget]), RootPanel_0);
var maybeDetachCommand, rootPanels, widgetsToDetach;
function $$init_161(){
}

function RootPanel$1_0(){
  Object_1.call(this);
  $$init_161();
}

defineSeed(216, 1, {}, RootPanel$1_0);
_.execute_2 = function execute_6(w){
  $isAttached(w) && w.onDetach();
}
;
function $$init_162(){
}

function RootPanel$2_0(){
  Object_1.call(this);
  $$init_162();
}

defineSeed(217, 1, {}, RootPanel$2_0);
_.dispose = function dispose_4(){
  detachWidgets();
}
;
function $$init_163(){
}

function RootPanel$3_0(){
  Object_1.call(this);
  $$init_163();
}

defineSeed(218, 1, makeCastMap([Q$CloseHandler, Q$EventHandler]), RootPanel$3_0);
_.onClose = function onClose(closeEvent){
  detachWidgets();
}
;
function $$init_164(){
}

function RootPanel$DefaultRootPanel_0(){
  RootPanel_0.call(this, getBodyElement());
  $$init_164();
}

defineSeed(219, 215, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RootPanel, Q$UIObject, Q$Widget]), RootPanel$DefaultRootPanel_0);
function $clinit_ValueBoxBase(){
  $clinit_ValueBoxBase = nullMethod;
  $clinit_FocusWidget();
  new TextBoxImpl_0;
}

function $$init_165(){
}

function $getText(this$static){
  return $getPropertyString($getElement(this$static), 'value');
}

function $getValue_0(this$static){
  try {
    return $getValueOrThrow(this$static);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$ParseException)) {
      $e0;
      return null;
    }
     else 
      throw unwrap($e0);
  }
}

function $getValueOrThrow(this$static){
  var parseResult, text_0;
  text_0 = $getText(this$static);
  parseResult = this$static.parser.parse_0(text_0);
  if ($equals_1('', text_0)) {
    return null;
  }
  return parseResult;
}

function $selectAll(this$static){
  var length_0;
  length_0 = $length_1($getText(this$static));
  length_0 > 0 && $setSelectionRange(this$static, 0, length_0);
}

function $setSelectionRange(this$static, pos, length_0){
  if (!$isAttached(this$static)) {
    return;
  }
  if (length_0 < 0) {
    throw new IndexOutOfBoundsException_1('Length must be a positive integer. Length: ' + length_0);
  }
  if (pos < 0 || length_0 + pos > $length_1($getText(this$static))) {
    throw new IndexOutOfBoundsException_1('From Index: ' + pos + '  To Index: ' + (pos + length_0) + '  Text Length: ' + $length_1($getText(this$static)));
  }
  $setSelectionRange_0($getElement(this$static), pos, length_0);
}

function $setText(this$static, text_0){
  $setPropertyString($getElement(this$static), 'value', jsNotEquals(text_0, null)?text_0:'');
  $refreshDirection(this$static.autoDirHandler);
}

function ValueBoxBase_0(elem, renderer, parser){
  $clinit_ValueBoxBase();
  FocusWidget_0.call(this, elem);
  $$init_165();
  this.autoDirHandler = addTo_0(this, isBidiEnabled());
  this , renderer;
  this.parser = parser;
}

defineSeed(222, 202, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.getDirection = function getDirection_0(){
  return getDirectionOnElement($getElement(this));
}
;
_.getText = function getText_1(){
  return $getText(this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  var type_0;
  type_0 = eventGetType(event_0);
  if ((type_0 & 896) != 0) {
    this , event_0;
    $onBrowserEvent(this, event_0);
    this , null;
  }
   else {
    $onBrowserEvent(this, event_0);
  }
}
;
_.onLoad = function onLoad_1(){
  $onLoad();
  $refreshDirection(this.autoDirHandler);
}
;
_.setDirection = function setDirection_0(direction){
  setDirectionOnElement($getElement(this), direction);
}
;
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = nullMethod;
  $clinit_ValueBoxBase();
  new TextBoxBase$TextAlignConstant_0(($clinit_ValueBoxBase$TextAlignment() , CENTER_0));
  new TextBoxBase$TextAlignConstant_0(($clinit_ValueBoxBase$TextAlignment() , JUSTIFY_0));
  new TextBoxBase$TextAlignConstant_0(($clinit_ValueBoxBase$TextAlignment() , LEFT_0));
  new TextBoxBase$TextAlignConstant_0(($clinit_ValueBoxBase$TextAlignment() , RIGHT_0));
}

function $$init_166(){
}

function $getValue_1(this$static){
  var raw;
  raw = dynamicCast($getValue_0(this$static), Q$String);
  return jsEquals(raw, null)?'':raw;
}

function TextBoxBase_0(elem){
  ValueBoxBase_0.call(this, elem, instance_2(), instance_1());
  $$init_166();
}

defineSeed(221, 222, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
function $$init_167(){
}

function TextBox_0(){
  $clinit_TextBoxBase();
  TextBox_1.call(this, $createTextInputElement(get_2()), 'gwt-TextBox');
}

function TextBox_1(element, styleName){
  TextBoxBase_0.call(this, element);
  $$init_167();
  jsNotEquals(styleName, null) && $setStyleName(this, styleName);
}

defineSeed(220, 221, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), TextBox_0);
function $$init_168(){
}

function TextBoxBase$TextAlignConstant_0(value_0){
  Object_1.call(this);
  $$init_168();
  this , value_0;
}

defineSeed(223, 1, {}, TextBoxBase$TextAlignConstant_0);
function $$init_169(){
}

function UIObject$DebugIdImpl_0(){
  Object_1.call(this);
  $$init_169();
}

defineSeed(224, 1, {}, UIObject$DebugIdImpl_0);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = nullMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1_0('CENTER', 0);
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2_0('JUSTIFY', 1);
  LEFT_0 = new ValueBoxBase$TextAlignment$3_0('LEFT', 2);
  RIGHT_0 = new ValueBoxBase$TextAlignment$4_0('RIGHT', 3);
  $VALUES_9 = initValues(_3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, makeCastMap([Q$Serializable]), Q$ValueBoxBase$TextAlignment, [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

function $$init_170(){
}

function ValueBoxBase$TextAlignment_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_170();
}

function valueOf_10(name_0){
  $clinit_ValueBoxBase$TextAlignment();
  return valueOf(($clinit_ValueBoxBase$TextAlignment$Map() , $MAP_9), name_0);
}

function values_10(){
  $clinit_ValueBoxBase$TextAlignment();
  return $VALUES_9;
}

defineSeed(225, 23, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_9, CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
function $$init_171(){
}

function ValueBoxBase$TextAlignment$1_0(enum$name, enum$ordinal){
  ValueBoxBase$TextAlignment_0.call(this, enum$name, enum$ordinal);
  $$init_171();
}

defineSeed(226, 225, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$1_0);
function $$init_172(){
}

function ValueBoxBase$TextAlignment$2_0(enum$name, enum$ordinal){
  ValueBoxBase$TextAlignment_0.call(this, enum$name, enum$ordinal);
  $$init_172();
}

defineSeed(227, 225, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$2_0);
function $$init_173(){
}

function ValueBoxBase$TextAlignment$3_0(enum$name, enum$ordinal){
  ValueBoxBase$TextAlignment_0.call(this, enum$name, enum$ordinal);
  $$init_173();
}

defineSeed(228, 225, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$3_0);
function $$init_174(){
}

function ValueBoxBase$TextAlignment$4_0(enum$name, enum$ordinal){
  ValueBoxBase$TextAlignment_0.call(this, enum$name, enum$ordinal);
  $$init_174();
}

defineSeed(229, 225, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$4_0);
function $clinit_ValueBoxBase$TextAlignment$Map(){
  $clinit_ValueBoxBase$TextAlignment$Map = nullMethod;
  $MAP_9 = createValueOfMap(($clinit_ValueBoxBase$TextAlignment() , $VALUES_9));
}

var $MAP_9;
function $$init_175(){
}

function $add_5(this$static, w){
  $insert_0(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (jsEquals(this$static.array[i], w)) {
      return i;
    }
  }
  return -1;
}

function $insert_0(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException_0;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, makeCastMap([Q$Serializable]), Q$Widget, this$static.array.length * 2, 0);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $iterator(this$static){
  return new WidgetCollection$WidgetIterator_0(this$static);
}

function $remove_0(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException_0;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_1(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException_0;
  }
  $remove_0(this$static, index_0);
}

function $size(this$static){
  return this$static.size_0;
}

function WidgetCollection_0(parent_0){
  Object_1.call(this);
  $$init_175();
  this.parent_0 = parent_0;
  this.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, makeCastMap([Q$Serializable]), Q$Widget, 4, 0);
}

defineSeed(231, 1, {}, WidgetCollection_0);
_.iterator = function iterator_1(){
  return $iterator(this);
}
;
_.size_0 = 0;
function $$init_176(this$static){
}

function $next(this$static){
  if (this$static.index_0 >= this$static.this$0.size_0) {
    throw new NoSuchElementException_0;
  }
  this$static.currentWidget = this$static.this$0.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_176(this);
}

defineSeed(232, 1, {}, WidgetCollection$WidgetIterator_0);
_.hasNext = function hasNext(){
  return this.index_0 < this.this$0.size_0;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_1 = function remove_3(){
  if (isNull(this.currentWidget)) {
    throw new IllegalStateException_0;
  }
  this.this$0.parent_0.remove_0(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
function $clinit_FocusImpl(){
  $clinit_FocusImpl = nullMethod;
  implPanel = new FocusImplSafari_0;
  implWidget = instanceOf(implPanel, Q$FocusImplStandard)?new FocusImpl_0:implPanel;
}

function $$init_177(){
}

function $getTabIndex_1(elem){
  return $getTabIndex(elem);
}

function $setTabIndex_1(elem, index_0){
  $setTabIndex(elem, index_0);
}

function FocusImpl_0(){
  Object_1.call(this);
  $$init_177();
}

function getFocusImplForWidget(){
  $clinit_FocusImpl();
  return implWidget;
}

defineSeed(233, 1, {}, FocusImpl_0);
_.blur_0 = function blur_0(elem){
  $blur(elem);
}
;
_.focus_0 = function focus_0(elem){
  $focus(elem);
}
;
var implPanel, implWidget;
function $$init_178(){
}

function FocusImplStandard_0(){
  FocusImpl_0.call(this);
  $$init_178();
}

defineSeed(235, 233, makeCastMap([Q$FocusImplStandard]));
function $$init_179(){
}

function FocusImplSafari_0(){
  FocusImplStandard_0.call(this);
  $$init_179();
}

defineSeed(234, 235, makeCastMap([Q$FocusImplStandard]), FocusImplSafari_0);
_.blur_0 = function blur_1(elem){
  $wnd.setTimeout(function(){
    elem.blur();
  }
  , 0);
}
;
_.focus_0 = function focus_1(elem){
  $wnd.setTimeout(function(){
    elem.focus();
  }
  , 0);
}
;
function $$init_180(){
}

function $setSelectionRange_0(elem, pos, length_0){
  try {
    elem.setSelectionRange(pos, pos + length_0);
  }
   catch (e) {
  }
}

function TextBoxImpl_0(){
  Object_1.call(this);
  $$init_180();
}

defineSeed(236, 1, {}, TextBoxImpl_0);
function $$init_181(){
}

function $displayMismatchWarning(runtimeValue, compileTimeValue){
  $wnd.alert('ERROR: Possible problem with your *.gwt.xml module file.' + '\nThe compile time user.agent value (' + compileTimeValue + ') does not match the runtime user.agent value (' + runtimeValue + '). Expect more errors.\n');
}

function $onModuleLoad_0(){
  var compileTimeValue, impl, runtimeValue;
  impl = new UserAgentImplSafari_0;
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  $equals_1(compileTimeValue, runtimeValue) || $displayMismatchWarning(runtimeValue, compileTimeValue);
}

function UserAgentAsserter_0(){
  Object_1.call(this);
  $$init_181();
}

defineSeed(237, 1, {}, UserAgentAsserter_0);
function $$init_182(){
}

function UserAgentImplSafari_0(){
  Object_1.call(this);
  $$init_182();
}

defineSeed(238, 1, {}, UserAgentImplSafari_0);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'safari';
}
;
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var makeVersion = function(result){
    return parseInt(result[1]) * 1000 + parseInt(result[2]);
  }
  ;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 10;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 9;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 8;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
function $$init_183(){
}

function SimpleEventBus$1_0(this$0, val$type, val$source, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = val$source;
  this.val$handler = val$handler;
  Object_1.call(this);
  $$init_183();
}

defineSeed(239, 1, makeCastMap([Q$HandlerRegistration]), SimpleEventBus$1_0);
_.removeHandler = function removeHandler_0(){
  this.this$0.doRemove(this.val$type, this.val$source, this.val$handler);
}
;
function $$init_184(){
}

function SimpleEventBus$2_0(this$0, val$type, val$source, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = val$source;
  this.val$handler = val$handler;
  Object_1.call(this);
  $$init_184();
}

defineSeed(240, 1, makeCastMap([Q$SimpleEventBus$Command]), SimpleEventBus$2_0);
_.execute_1 = function execute_7(){
  $doAddNow(this.this$0, this.val$type, this.val$source, this.val$handler);
}
;
function $$init_185(){
}

function SimpleEventBus$3_0(this$0, val$type, val$source, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = val$source;
  this.val$handler = val$handler;
  Object_1.call(this);
  $$init_185();
}

defineSeed(241, 1, makeCastMap([Q$SimpleEventBus$Command]), SimpleEventBus$3_0);
_.execute_1 = function execute_8(){
  $doRemoveNow(this.this$0, this.val$type, this.val$source, this.val$handler);
}
;
function $$init_186(this$static){
}

function $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(this$static){
  var result;
  if (isNull(this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$)) {
    result = $get_Key$type$com$google$web$bindery$event$shared$SimpleEventBus$_annotation$$none$$();
    this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$;
}

function $get_Key$type$com$google$web$bindery$event$shared$SimpleEventBus$_annotation$$none$$(){
  var created, result;
  created = new SimpleEventBus_0;
  if (!instanceOf(created, Q$SimpleEventBus)) {
    debugger;
    throw makeAssertionError();
  }
  result = dynamicCast(created, Q$SimpleEventBus);
  $memberInject_Key$type$com$google$web$bindery$event$shared$SimpleEventBus$_annotation$$none$$();
  return result;
}

function $memberInject_Key$type$com$google$web$bindery$event$shared$SimpleEventBus$_annotation$$none$$(){
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_0(injector){
  Object_1.call(this);
  $$init_186(this);
  this , injector;
}

defineSeed(242, 1, {}, fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_0);
_.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = null;
function $$init_187(){
}

function StandardProvider_0(provider){
  Object_1.call(this);
  $$init_187();
  this.provider = provider;
}

defineSeed(243, 1, {}, StandardProvider_0);
_.get_1 = function get_8(callback){
  callback.onSuccess(this.provider.get_0());
}
;
function $$init_188(){
}

function DefaultClientActionHandlerRegistry_0(){
  Object_1.call(this);
  $$init_188();
}

defineSeed(244, 1, makeCastMap([Q$DefaultClientActionHandlerRegistry]), DefaultClientActionHandlerRegistry_0);
function $$init_189(this$static){
}

function $get_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$(this$static){
  var result;
  if (isNull(this$static.singleton_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$)) {
    result = $get_Key$type$com$gwtplatform$dispatch$client$actionhandler$DefaultClientActionHandlerRegistry$_annotation$$none$$();
    this$static.singleton_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$;
}

function $get_Key$type$com$gwtplatform$dispatch$client$actionhandler$DefaultClientActionHandlerRegistry$_annotation$$none$$(){
  var created, result;
  created = new DefaultClientActionHandlerRegistry_0;
  if (!instanceOf(created, Q$DefaultClientActionHandlerRegistry)) {
    debugger;
    throw makeAssertionError();
  }
  result = dynamicCast(created, Q$DefaultClientActionHandlerRegistry);
  $memberInject_Key$type$com$gwtplatform$dispatch$client$actionhandler$DefaultClientActionHandlerRegistry$_annotation$$none$$();
  return result;
}

function $initializeEagerSingletons(this$static){
  $get_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$(this$static);
}

function $memberInject_Key$type$com$gwtplatform$dispatch$client$actionhandler$DefaultClientActionHandlerRegistry$_annotation$$none$$(){
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_2(injector){
  Object_1.call(this);
  $$init_189(this);
  this , injector;
}

defineSeed(245, 1, {}, fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_2);
_.singleton_Key$type$com$gwtplatform$dispatch$client$actionhandler$ClientActionHandlerRegistry$_annotation$$none$$ = null;
function $$init_190(){
}

function $disable(this$static){
  return this$static.disable;
}

function AutobindDisable_0(){
  Object_1.call(this);
  $$init_190();
  this.disable = false;
}

defineSeed(246, 1, {}, AutobindDisable_0);
_.disable = false;
function $clinit_DelayedBindRegistry(){
  $clinit_DelayedBindRegistry = nullMethod;
  delayedBindObjects = new ArrayList_0;
}

function bind_0(ginjector){
  $clinit_DelayedBindRegistry();
  var delayedBindObject, delayedBindObject$iterator;
  ginjector;
  for (delayedBindObject$iterator = delayedBindObjects.iterator(); delayedBindObject$iterator.hasNext();) {
    delayedBindObject = dynamicCast(delayedBindObject$iterator.next_0(), Q$DelayedBind);
    delayedBindObject.delayedBind(ginjector);
  }
}

function register(delayedBindObject){
  $clinit_DelayedBindRegistry();
  delayedBindObjects.add_1(delayedBindObject);
}

var delayedBindObjects;
function $$init_191(this$static){
  this$static.bound = new HandlerContainerImpl$BindMonitor_0;
  this$static.handlerRegistrations = new ArrayList_0;
}

function $automaticBind(this$static, autobindDisable){
  if (!this$static.autoBind || $disable(autobindDisable)) {
    return;
  }
  this$static.bind_0();
}

function $bind(this$static){
  if (!this$static.bound.value_0) {
    this$static.onBind();
    this$static.bound.value_0 = true;
  }
}

function $onBind(){
}

function $registerHandler(this$static, handlerRegistration){
  this$static.handlerRegistrations.add_1(handlerRegistration);
}

function HandlerContainerImpl_0(){
  HandlerContainerImpl_1.call(this, true);
}

function HandlerContainerImpl_1(autoBind){
  Object_1.call(this);
  $$init_191(this);
  this.autoBind = autoBind;
}

defineSeed(248, 1, {});
_.bind_0 = function bind_1(){
  $bind(this);
}
;
_.onBind = function onBind(){
  $onBind();
}
;
_.registerHandler = function registerHandler(handlerRegistration){
  $registerHandler(this, handlerRegistration);
}
;
_.autoBind = false;
function $$init_192(){
}

function HandlerContainerImpl$BindMonitor_0(){
  Object_1.call(this);
  $$init_192();
}

defineSeed(249, 1, {}, HandlerContainerImpl$BindMonitor_0);
_.value_0 = false;
function $$init_193(this$static){
  this$static.activeChildren = new HashMap_0;
  this$static.popupChildren = new ArrayList_0;
  this$static.visibleHandlers = new ArrayList_0;
  this$static.visibleHandlerRegistrations = new ArrayList_0;
}

function $addHandler_1(this$static, type_0, handler){
  return $getEventBus(this$static).addHandler(type_0, handler);
}

function $addRegisteredHandler(this$static, type_0, handler){
  this$static.registerHandler($addHandler_1(this$static, type_0, handler));
}

function $addToPopupSlot(this$static, child){
  $addToPopupSlot_0(this$static, child, true);
}

function $addToPopupSlot_0(this$static, child, center){
  var popupPresenter, popupPresenter$iterator;
  if (isNull(child)) {
    return;
  }
  $reparent(child, this$static);
  for (popupPresenter$iterator = this$static.popupChildren.iterator(); popupPresenter$iterator.hasNext();) {
    popupPresenter = dynamicCast(popupPresenter$iterator.next_0(), Q$PresenterWidget);
    if (jsEquals(popupPresenter, child)) {
      return;
    }
  }
  dynamicCast($getView(child), Q$PopupView);
  this$static.popupChildren.add_1(child);
  center && null.nullMethod();
  if ($isVisible(this$static)) {
    null.nullMethod();
    $monitorCloseEvent(this$static, child);
    $isVisible(child) || $internalReveal(child);
  }
}

function $clearSlot(this$static, slot){
  var activeChild, activeChild$iterator, slotChildren;
  slotChildren = dynamicCast(this$static.activeChildren.get_2(slot), Q$List);
  if (isNotNull(slotChildren)) {
    if ($isVisible(this$static)) {
      for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
        activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
        $internalHide(activeChild);
      }
    }
    slotChildren.clear_0();
  }
  $getView(this$static).setInSlot(slot, null);
}

function $detach(this$static, childPresenter){
  var slotChildren, slotChildren$iterator;
  for (slotChildren$iterator = this$static.activeChildren.values().iterator(); slotChildren$iterator.hasNext();) {
    slotChildren = dynamicCast(slotChildren$iterator.next_0(), Q$List);
    slotChildren.remove_2(childPresenter);
  }
  this$static.popupChildren.remove_2(childPresenter);
}

function $getEventBus(this$static){
  return this$static.eventBus;
}

function $getView(this$static){
  return this$static.view;
}

function $internalHide(this$static){
  var activeChild, activeChild$iterator, popupPresenter, popupPresenter$iterator, slotChildren, slotChildren$iterator;
  if (!$isVisible(this$static)) {
    debugger;
    throw makeAssertionError_Object('internalHide() called on a hidden presenter!');
  }
  for (slotChildren$iterator = this$static.activeChildren.values().iterator(); slotChildren$iterator.hasNext();) {
    slotChildren = dynamicCast(slotChildren$iterator.next_0(), Q$List);
    for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
      activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
      $internalHide(activeChild);
    }
  }
  for (popupPresenter$iterator = this$static.popupChildren.iterator(); popupPresenter$iterator.hasNext();) {
    popupPresenter = dynamicCast(popupPresenter$iterator.next_0(), Q$PresenterWidget);
    dynamicCast($getView(popupPresenter), Q$PopupView).nullMethod();
    $internalHide(popupPresenter);
    dynamicCast($getView(popupPresenter), Q$PopupView).nullMethod();
  }
  $unregisterVisibleHandlers(this$static);
  this$static.visible = false;
  $onHide();
}

function $internalReset(this$static){
  var activeChild, activeChild$iterator, popupPresenter, popupPresenter$iterator, slotChildren, slotChildren$iterator;
  this$static.onReset();
  for (slotChildren$iterator = this$static.activeChildren.values().iterator(); slotChildren$iterator.hasNext();) {
    slotChildren = dynamicCast(slotChildren$iterator.next_0(), Q$List);
    for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
      activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
      $internalReset(activeChild);
    }
  }
  for (popupPresenter$iterator = this$static.popupChildren.iterator(); popupPresenter$iterator.hasNext();) {
    popupPresenter = dynamicCast(popupPresenter$iterator.next_0(), Q$PresenterWidget);
    $internalReset(popupPresenter);
  }
}

function $internalReveal(this$static){
  var activeChild, activeChild$iterator, popupPresenter, popupPresenter$iterator, slotChildren, slotChildren$iterator;
  if ($isVisible(this$static)) {
    debugger;
    throw makeAssertionError_Object('internalReveal() called on a visible presenter!');
  }
  $onReveal();
  this$static.visible = true;
  for (slotChildren$iterator = this$static.activeChildren.values().iterator(); slotChildren$iterator.hasNext();) {
    slotChildren = dynamicCast(slotChildren$iterator.next_0(), Q$List);
    for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
      activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
      $internalReveal(activeChild);
    }
  }
  for (popupPresenter$iterator = this$static.popupChildren.iterator(); popupPresenter$iterator.hasNext();) {
    popupPresenter = dynamicCast(popupPresenter$iterator.next_0(), Q$PresenterWidget);
    dynamicCast($getView(popupPresenter), Q$PopupView).nullMethod();
    $monitorCloseEvent(this$static, popupPresenter);
    $internalReveal(popupPresenter);
  }
  $registerVisibleHandlers(this$static);
}

function $isVisible(this$static){
  return this$static.visible;
}

function $monitorCloseEvent(this$static, popupPresenter){
  dynamicCast($getView(popupPresenter), Q$PopupView);
  null.nullMethod(new PresenterWidget$1_0(this$static, popupPresenter));
}

function $onHide(){
}

function $onReset(){
}

function $onReveal(){
}

function $registerVisibleHandler(this$static){
  var handlerRegistration;
  handlerRegistration = $addHandler_1(this$static, null.nullField, null.nullField);
  this$static.visibleHandlerRegistrations.add_1(handlerRegistration);
}

function $registerVisibleHandlers(this$static){
  var handlerInformation, handlerInformation$iterator;
  for (handlerInformation$iterator = this$static.visibleHandlers.iterator(); handlerInformation$iterator.hasNext();) {
    handlerInformation = dynamicCast(handlerInformation$iterator.next_0(), Q$PresenterWidget$HandlerInformation);
    $registerVisibleHandler(this$static);
  }
}

function $reparent(this$static, newParent){
  isNotNull(this$static.currentParentPresenter) && jsNotEquals(this$static.currentParentPresenter, newParent) && $detach(this$static.currentParentPresenter, this$static);
  this$static.currentParentPresenter = newParent;
}

function $setInSlot(this$static, slot, content_0){
  $setInSlot_0(this$static, slot, content_0, true);
}

function $setInSlot_0(this$static, slot, content_0, performReset){
  var activeChild, activeChild$iterator, slotChildren;
  if (isNull(content_0)) {
    $clearSlot(this$static, slot);
    return;
  }
  $reparent(content_0, this$static);
  slotChildren = dynamicCast(this$static.activeChildren.get_2(slot), Q$List);
  if (isNotNull(slotChildren)) {
    if (slotChildren.size_1() == 1 && maskUndefined(slotChildren.get_3(0)) === maskUndefined(content_0)) {
      return;
    }
    if ($isVisible(this$static)) {
      for (activeChild$iterator = slotChildren.iterator(); activeChild$iterator.hasNext();) {
        activeChild = dynamicCast(activeChild$iterator.next_0(), Q$PresenterWidget);
        $internalHide(activeChild);
      }
    }
    slotChildren.clear_0();
    slotChildren.add_1(content_0);
  }
   else {
    slotChildren = new ArrayList_1(1);
    slotChildren.add_1(content_0);
    this$static.activeChildren.put(slot, slotChildren);
  }
  $getView(this$static).setInSlot(slot, content_0);
  if ($isVisible(this$static)) {
    $isVisible(content_0) || $internalReveal(content_0);
    performReset && fire_11(this$static);
  }
}

function $unregisterVisibleHandlers(this$static){
  var handlerRegistration, handlerRegistration$iterator;
  for (handlerRegistration$iterator = this$static.visibleHandlerRegistrations.iterator(); handlerRegistration$iterator.hasNext();) {
    handlerRegistration = dynamicCast(handlerRegistration$iterator.next_0(), Q$HandlerRegistration);
    handlerRegistration.removeHandler();
  }
  this$static.visibleHandlerRegistrations.clear_0();
}

function PresenterWidget_0(eventBus, view){
  PresenterWidget_1.call(this, true, eventBus, view);
}

function PresenterWidget_1(autoBind, eventBus, view){
  HandlerContainerImpl_1.call(this, autoBind);
  $$init_193(this);
  this.eventBus = eventBus;
  this.view = view;
}

defineSeed(251, 248, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget]));
_.asWidget = function asWidget_0(){
  return isNull($getView(this))?null:$getView(this).asWidget();
}
;
_.fireEvent = function fireEvent_4(event_0){
  $getEventBus(this).fireEventFromSource(event_0, this);
}
;
_.onReset = function onReset(){
  $onReset();
}
;
_.visible = false;
function $$init_194(){
}

function $forceReveal(this$static){
  if ($isVisible(this$static)) {
    return;
  }
  this$static.revealInParent();
}

function $getProxy(this$static){
  return this$static.proxy;
}

function $prepareFromRequest(){
}

function $useManualReveal(){
  return false;
}

function Presenter_0(eventBus, view, proxy){
  Presenter_1.call(this, eventBus, view, proxy, null, null);
}

function Presenter_1(eventBus, view, proxy, revealType, slot){
  PresenterWidget_0.call(this, eventBus, view);
  $$init_194();
  this.proxy = proxy;
  this.revealType = revealType;
  this.slot = slot;
}

defineSeed(250, 251, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$Presenter, Q$PresenterWidget]));
_.bind_0 = function bind_2(){
  $bind(this);
  instanceOf($getProxy(this), Q$HasHandlerContainer) && dynamicCast($getProxy(this), Q$HasHandlerContainer).getHandlerContainer().bind_0();
}
;
_.revealInParent = function revealInParent(){
  if (isNotNull(this.revealType)) {
    switch ($ordinal(this.revealType)) {
      case 0:
        fire_13(this, this);
        break;
      case 1:
        fire_14(this, this);
        break;
      case 2:
        fire_15(this, this);
    }
  }
   else {
    fire_12(this, this.slot, this);
  }
}
;
function $$init_195(){
}

function PresenterWidget$1_0(this$0, val$popupPresenter){
  this , this$0;
  this , val$popupPresenter;
  Object_1.call(this);
  $$init_195();
}

defineSeed(252, 1, {}, PresenterWidget$1_0);
function $clinit_RootPresenter(){
  $clinit_RootPresenter = nullMethod;
  rootSlot = new Object_1;
}

function $$init_196(){
}

function RootPresenter_0(eventBus, view){
  $clinit_RootPresenter();
  PresenterWidget_0.call(this, eventBus, view);
  $$init_196();
  this.visible = true;
}

defineSeed(253, 251, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LockInteractionHandler, Q$ResetPresentersHandler, Q$RevealRootContentHandler, Q$RevealRootLayoutContentHandler, Q$RevealRootPopupContentHandler]), RootPresenter_0);
_.onBind = function onBind_0(){
  $onBind();
  $addRegisteredHandler(this, getType_21(), this);
  $addRegisteredHandler(this, getType_22(), this);
  $addRegisteredHandler(this, getType_23(), this);
  $addRegisteredHandler(this, getType_24(), this);
  $addRegisteredHandler(this, getType_17(), this);
}
;
_.onLockInteraction = function onLockInteraction(lockInteractionEvent){
  $shouldLock(lockInteractionEvent)?$lockScreen(dynamicCast($getView(this), Q$RootPresenter$RootView)):$unlockScreen(dynamicCast($getView(this), Q$RootPresenter$RootView));
}
;
_.onResetPresenters = function onResetPresenters(resetPresentersEvent){
  if (!this.isResetting) {
    this.isResetting = true;
    $internalReset(this);
    this.isResetting = false;
  }
}
;
_.onRevealRootContent = function onRevealRootContent(revealContentEvent){
  $setUsingRootLayoutPanel(dynamicCast($getView(this), Q$RootPresenter$RootView), false);
  $setInSlot(this, rootSlot, $getContent(revealContentEvent));
}
;
_.onRevealRootLayoutContent = function onRevealRootLayoutContent(revealContentEvent){
  $setUsingRootLayoutPanel(dynamicCast($getView(this), Q$RootPresenter$RootView), true);
  $setInSlot(this, rootSlot, $getContent_0(revealContentEvent));
}
;
_.onRevealRootPopupContent = function onRevealRootPopupContent(revealContentEvent){
  $isCentered(revealContentEvent)?$addToPopupSlot(this, $getContent_1(revealContentEvent)):$addToPopupSlot_0(this, $getContent_1(revealContentEvent), false);
}
;
_.isResetting = false;
var rootSlot;
function $$init_197(){
}

function ViewImpl_0(){
  Object_1.call(this);
  $$init_197();
}

defineSeed(255, 1, makeCastMap([Q$IsWidget]));
_.asWidget = function asWidget_1(){
  return this.widget;
}
;
_.setInSlot = function setInSlot(slot, content_0){
}
;
function $$init_198(){
}

function $ensureGlass(this$static){
  var style;
  if (isNull(this$static.glass)) {
    this$static.glass = $createDivElement(get_2());
    style = $getStyle(this$static.glass);
    $setPosition(style, ($clinit_Style$Position() , ABSOLUTE));
    $setLeft(style, 0, ($clinit_Style$Unit() , PX));
    $setTop(style, 0, ($clinit_Style$Unit() , PX));
    $setRight(style, 0, ($clinit_Style$Unit() , PX));
    $setBottom(style, 0, ($clinit_Style$Unit() , PX));
    $setZIndex(style, 2147483647);
  }
}

function $lockScreen(this$static){
  $ensureGlass(this$static);
  $appendChild($getBody(get_2()), this$static.glass);
}

function $setUsingRootLayoutPanel(this$static, usingRootLayoutPanel){
  this$static.usingRootLayoutPanel = usingRootLayoutPanel;
}

function $unlockScreen(this$static){
  $ensureGlass(this$static);
  $removeChild($getBody(get_2()), this$static.glass);
}

function RootPresenter$RootView_0(){
  ViewImpl_0.call(this);
  $$init_198();
}

defineSeed(254, 255, makeCastMap([Q$IsWidget, Q$RootPresenter$RootView]), RootPresenter$RootView_0);
_.asWidget = function asWidget_2(){
  debugger;
  throw makeAssertionError_Object('Root view has no widget, you should never call asWidget()');
}
;
_.setInSlot = function setInSlot_0(slot, content_0){
  if (maskUndefined(slot) !== maskUndefined(($clinit_RootPresenter() , rootSlot))) {
    debugger;
    throw makeAssertionError_Object('Unknown slot used in the root proxy.');
  }
  if (this.usingRootLayoutPanel) {
    $clear(get_6());
    $clear(get_5());
    $add_2(get_6(), get_5());
    isNotNull(content_0) && $add(get_5(), content_0);
  }
   else {
    $clear(get_5());
    $clear(get_6());
    isNotNull(content_0) && $add(get_6(), content_0);
  }
}
;
_.usingRootLayoutPanel = false;
function $$init_199(this$static){
}

function $com$gwtplatform$mvp$client$AutobindDisable_com$gwtplatform$mvp$client$AutobindDisable_methodInjection(){
  return new AutobindDisable_0;
}

function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection(invokee, _0){
  $automaticBind(invokee, _0);
}

function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_(invokee, _0){
  $automaticBind(invokee, _0);
}

function $com$gwtplatform$mvp$client$RootPresenter_com$gwtplatform$mvp$client$RootPresenter_methodInjection(_0, _1){
  return new RootPresenter_0(_0, _1);
}

function $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$(this$static){
  var result;
  if (isNull(this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) {
    result = $com$gwtplatform$mvp$client$AutobindDisable_com$gwtplatform$mvp$client$AutobindDisable_methodInjection();
    $memberInject_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$();
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$;
}

function $get_Key$type$com$gwtplatform$mvp$client$RootPresenter$RootView$_annotation$$none$$(){
  var created, result;
  created = new RootPresenter$RootView_0;
  if (!instanceOf(created, Q$RootPresenter$RootView)) {
    debugger;
    throw makeAssertionError();
  }
  result = dynamicCast(created, Q$RootPresenter$RootView);
  $memberInject_Key$type$com$gwtplatform$mvp$client$RootPresenter$RootView$_annotation$$none$$();
  return result;
}

function $get_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$(this$static){
  var result;
  if (isNull(this$static.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$)) {
    result = $com$gwtplatform$mvp$client$RootPresenter_com$gwtplatform$mvp$client$RootPresenter_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$gwtplatform$mvp$client$RootPresenter$RootView$_annotation$$none$$());
    $memberInject_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$(this$static, result);
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$;
}

function $initializeEagerSingletons_0(this$static){
  $get_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$(this$static);
}

function $memberInject_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$(){
}

function $memberInject_Key$type$com$gwtplatform$mvp$client$RootPresenter$RootView$_annotation$$none$$(){
}

function $memberInject_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$(this$static, injectee){
  $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_(injectee, $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$(this$static));
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_4(injector){
  Object_1.call(this);
  $$init_199(this);
  this.injector = injector;
}

defineSeed(256, 1, {}, fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_4);
_.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = null;
_.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$ = null;
function $clinit_AsyncCallStartEvent(){
  $clinit_AsyncCallStartEvent = nullMethod;
  TYPE_7 = new GwtEvent$Type_0;
}

function $$init_200(){
}

function $dispatch_6(){
  null.nullMethod();
}

function AsyncCallStartEvent_0(){
  GwtEvent_0.call(this);
  $$init_200();
}

function fire_6(source){
  $clinit_AsyncCallStartEvent();
  source.fireEvent_0(new AsyncCallStartEvent_0);
}

function getType_14(){
  return TYPE_7;
}

defineSeed(257, 106, {}, AsyncCallStartEvent_0);
_.dispatch_0 = function dispatch_7(handler){
  $dispatch_6(dynamicCast(handler, Q$AsyncCallStartHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_8(){
  return getType_14();
}
;
var TYPE_7;
function $clinit_AsyncCallSucceedEvent(){
  $clinit_AsyncCallSucceedEvent = nullMethod;
  TYPE_8 = new GwtEvent$Type_0;
}

function $$init_201(){
}

function $dispatch_7(){
  null.nullMethod();
}

function AsyncCallSucceedEvent_0(){
  GwtEvent_0.call(this);
  $$init_201();
}

function fire_7(source){
  $clinit_AsyncCallSucceedEvent();
  source.fireEvent_0(new AsyncCallSucceedEvent_0);
}

function getType_15(){
  return TYPE_8;
}

defineSeed(258, 106, {}, AsyncCallSucceedEvent_0);
_.dispatch_0 = function dispatch_8(handler){
  $dispatch_7(dynamicCast(handler, Q$AsyncCallSucceedHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_9(){
  return getType_15();
}
;
var TYPE_8;
function getType_16(){
  isNull(TYPE_9) && (TYPE_9 = new GwtEvent$Type_0);
  return TYPE_9;
}

var TYPE_9;
function $$init_202(){
}

function $dispatch_8(this$static, handler){
  handler.onLockInteraction(this$static);
}

function $shouldLock(this$static){
  return this$static.lock;
}

function LockInteractionEvent_0(lock){
  GwtEvent_0.call(this);
  $$init_202();
  this.lock = lock;
}

function fire_8(source, lock){
  source.fireEvent(new LockInteractionEvent_0(lock));
}

function getType_17(){
  isNull(TYPE_10) && (TYPE_10 = new GwtEvent$Type_0);
  return TYPE_10;
}

defineSeed(260, 106, {}, LockInteractionEvent_0);
_.dispatch_0 = function dispatch_9(handler){
  $dispatch_8(this, dynamicCast(handler, Q$LockInteractionHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_10(){
  return getType_17();
}
;
_.lock = false;
var TYPE_10;
function $clinit_NavigationEvent(){
  $clinit_NavigationEvent = nullMethod;
  TYPE_11 = new GwtEvent$Type_0;
}

function $$init_203(){
}

function $dispatch_9(){
  null.nullMethod();
}

function NavigationEvent_0(request){
  GwtEvent_0.call(this);
  $$init_203();
  this , request;
}

function fire_9(source, request){
  $clinit_NavigationEvent();
  source.fireEvent(new NavigationEvent_0(request));
}

function getType_18(){
  return TYPE_11;
}

defineSeed(261, 106, {}, NavigationEvent_0);
_.dispatch_0 = function dispatch_10(handler){
  $dispatch_9(dynamicCast(handler, Q$NavigationHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_11(){
  return getType_18();
}
;
var TYPE_11;
function $clinit_NavigationRefusedEvent(){
  $clinit_NavigationRefusedEvent = nullMethod;
  TYPE_12 = new GwtEvent$Type_0;
}

function $$init_204(){
}

function $dispatch_10(){
  null.nullMethod();
}

function NavigationRefusedEvent_0(){
  GwtEvent_0.call(this);
  $$init_204();
}

function fire_10(source){
  $clinit_NavigationRefusedEvent();
  source.fireEvent(new NavigationRefusedEvent_0);
}

function getType_19(){
  return TYPE_12;
}

defineSeed(262, 106, {}, NavigationRefusedEvent_0);
_.dispatch_0 = function dispatch_11(handler){
  $dispatch_10(dynamicCast(handler, Q$NavigationRefusedHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_12(){
  return getType_19();
}
;
var TYPE_12;
function $$init_205(){
}

function $checkLoading(this$static){
  if (jsEquals(this$static.state, ($clinit_NotifyingAsyncCallback$State() , UNKNOWN))) {
    debugger;
    throw makeAssertionError();
  }
  if (jsEquals(this$static.state, ($clinit_NotifyingAsyncCallback$State() , INITIALIZED))) {
    ++counter;
    counter == 1 && fire_6(this$static.eventBus);
    this$static.state = ($clinit_NotifyingAsyncCallback$State() , LOADING);
  }
}

function $prepare(this$static){
  if (jsEquals(this$static.state, ($clinit_NotifyingAsyncCallback$State() , LOADING))) {
    debugger;
    throw makeAssertionError();
  }
  this$static.state = ($clinit_NotifyingAsyncCallback$State() , INITIALIZED);
}

function NotifyingAsyncCallback_0(eventBus){
  Object_1.call(this);
  $$init_205();
  this.eventBus = eventBus;
  this.state = ($clinit_NotifyingAsyncCallback$State() , UNKNOWN);
}

defineSeed(263, 1, {});
_.onSuccess = function onSuccess(result){
  if (!(jsEquals(this.state, ($clinit_NotifyingAsyncCallback$State() , INITIALIZED)) || jsEquals(this.state, ($clinit_NotifyingAsyncCallback$State() , LOADING)))) {
    debugger;
    throw makeAssertionError();
  }
  if (jsEquals(this.state, ($clinit_NotifyingAsyncCallback$State() , LOADING))) {
    --counter;
    counter == 0 && fire_7(this.eventBus);
  }
  this.state = ($clinit_NotifyingAsyncCallback$State() , SUCCEEDED);
  this.success(result);
}
;
var counter = 0;
function $clinit_NotifyingAsyncCallback$State(){
  $clinit_NotifyingAsyncCallback$State = nullMethod;
  UNKNOWN = new NotifyingAsyncCallback$State_0('UNKNOWN', 0);
  INITIALIZED = new NotifyingAsyncCallback$State_0('INITIALIZED', 1);
  LOADING = new NotifyingAsyncCallback$State_0('LOADING', 2);
  SUCCEEDED = new NotifyingAsyncCallback$State_0('SUCCEEDED', 3);
  FAILED = new NotifyingAsyncCallback$State_0('FAILED', 4);
  $VALUES_10 = initValues(_3Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2_classLit, makeCastMap([Q$Serializable]), Q$NotifyingAsyncCallback$State, [UNKNOWN, INITIALIZED, LOADING, SUCCEEDED, FAILED]);
}

function $$init_206(){
}

function NotifyingAsyncCallback$State_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_206();
}

function valueOf_11(name_0){
  $clinit_NotifyingAsyncCallback$State();
  return valueOf(($clinit_NotifyingAsyncCallback$State$Map() , $MAP_10), name_0);
}

function values_11(){
  $clinit_NotifyingAsyncCallback$State();
  return $VALUES_10;
}

defineSeed(264, 23, makeCastMap([Q$NotifyingAsyncCallback$State, Q$Serializable, Q$Comparable, Q$Enum]), NotifyingAsyncCallback$State_0);
var $VALUES_10, FAILED, INITIALIZED, LOADING, SUCCEEDED, UNKNOWN;
function $clinit_NotifyingAsyncCallback$State$Map(){
  $clinit_NotifyingAsyncCallback$State$Map = nullMethod;
  $MAP_10 = createValueOfMap(($clinit_NotifyingAsyncCallback$State() , $VALUES_10));
}

var $MAP_10;
function $$init_207(){
}

function $customEscape(this$static, string){
  var builder, ch_0, hierarchyChar, i, len, paramChar, valueChar;
  builder = new StringBuilder_0;
  len = $length_1(string);
  hierarchyChar = $charAt(this$static.hierarchySeparator, 0);
  paramChar = $charAt(this$static.paramSeparator, 0);
  valueChar = $charAt(this$static.valueSeparator, 0);
  for (i = 0; i < len; i++) {
    ch_0 = $charAt(string, i);
    ch_0 == 92?$append_1(builder, '\\3'):ch_0 == hierarchyChar?$append_1(builder, '\\0'):ch_0 == paramChar?$append_1(builder, '\\1'):ch_0 == valueChar?$append_1(builder, '\\2'):$append_0(builder, ch_0);
  }
  return encodeQueryString($toString_2(builder));
}

function $customUnescape(this$static, string){
  var builder, ch_0, ch2, i, len;
  builder = new StringBuilder_0;
  len = $length_1(string);
  48;
  49;
  50;
  51;
  i = 0;
  while (i < len - 1) {
    ch_0 = $charAt(string, i);
    if (ch_0 == 92) {
      ++i;
      ch2 = $charAt(string, i);
      ch2 == 48?$append_1(builder, this$static.hierarchySeparator):ch2 == 49?$append_1(builder, this$static.paramSeparator):ch2 == 50?$append_1(builder, this$static.valueSeparator):ch2 == 51 && $append_0(builder, 92);
    }
     else {
      $append_0(builder, ch_0);
    }
    ++i;
  }
  if (i == len - 1) {
    ch_0 = $charAt(string, i);
    if (ch_0 == 92) {
      throw new TokenFormatException_0("Last character of string being unescaped cannot be '\\'.");
    }
    $append_0(builder, ch_0);
  }
  return $toString_2(builder);
}

function $placeTokenToUnescapedString(this$static, placeRequest){
  var name_0, name$iterator, out, params;
  out = new StringBuilder_0;
  $append_1(out, $customEscape(this$static, $getNameToken_0(placeRequest)));
  params = $getParameterNames(placeRequest);
  if (isNotNull(params)) {
    for (name$iterator = params.iterator(); name$iterator.hasNext();) {
      name_0 = dynamicCast(name$iterator.next_0(), Q$String);
      $append_1($append_1($append_1($append_1(out, this$static.paramSeparator), $customEscape(this$static, name_0)), this$static.valueSeparator), $customEscape(this$static, $getParameter(placeRequest, name_0, null)));
    }
  }
  return $toString_2(out);
}

function $unescapedStringToPlaceRequest(this$static, unescapedPlaceToken){
  var key, param, paramToken, paramToken$array, paramToken$index, paramToken$max, paramTokens, paramsChunk, reqBuilder, split_0, value_0;
  split_0 = $indexOf_1(unescapedPlaceToken, this$static.paramSeparator);
  if (split_0 == 0) {
    throw new TokenFormatException_0('Place history token is missing.');
  }
   else if (split_0 == -1) {
    return $build($nameToken(new PlaceRequest$Builder_0, $customUnescape(this$static, unescapedPlaceToken)));
  }
   else if (split_0 >= 0) {
    reqBuilder = $nameToken(new PlaceRequest$Builder_0, $customUnescape(this$static, $substring_0(unescapedPlaceToken, 0, split_0)));
    paramsChunk = $substring(unescapedPlaceToken, split_0 + 1);
    paramTokens = $split_0(paramsChunk, this$static.paramSeparator);
    for (paramToken$array = paramTokens , paramToken$index = 0 , paramToken$max = paramToken$array.length; paramToken$index < paramToken$max; ++paramToken$index) {
      paramToken = paramToken$array[paramToken$index];
      if ($isEmpty(paramToken)) {
        throw new TokenFormatException_0("Bad parameter: Successive parameters require a single '" + this$static.paramSeparator + "' between them.");
      }
      param = $split_0(paramToken, this$static.valueSeparator);
      if (param.length == 1) {
        if ($charAt(paramToken, $length_1(paramToken) - 1) != $charAt(this$static.valueSeparator, 0)) {
          throw new TokenFormatException_0('Bad parameter: Need exactly one key and one value.');
        }
      }
       else if (param.length == 2) {
        if ($charAt(paramToken, $length_1(paramToken) - 1) == $charAt(this$static.valueSeparator, 0)) {
          throw new TokenFormatException_0('Bad parameter: Need exactly one key and one value.');
        }
      }
       else {
        throw new TokenFormatException_0('Bad parameter: Need exactly one key and one value.');
      }
      key = $customUnescape(this$static, param[0]);
      value_0 = param.length == 2?$customUnescape(this$static, param[1]):'';
      reqBuilder = $with(reqBuilder, key, value_0);
    }
    return $build(reqBuilder);
  }
  return null;
}

function ParameterTokenFormatter_0(){
  ParameterTokenFormatter_1.call(this, '/', ';', '=');
}

function ParameterTokenFormatter_1(hierarchySeparator, paramSeparator, valueSeparator){
  Object_1.call(this);
  $$init_207();
  if ($length_1(hierarchySeparator) != 1) {
    debugger;
    throw makeAssertionError();
  }
  if ($length_1(paramSeparator) != 1) {
    debugger;
    throw makeAssertionError();
  }
  if ($length_1(valueSeparator) != 1) {
    debugger;
    throw makeAssertionError();
  }
  if ($equals_1(hierarchySeparator, paramSeparator)) {
    debugger;
    throw makeAssertionError();
  }
  if ($equals_1(hierarchySeparator, valueSeparator)) {
    debugger;
    throw makeAssertionError();
  }
  if ($equals_1(paramSeparator, valueSeparator)) {
    debugger;
    throw makeAssertionError();
  }
  if ($equals_1(valueSeparator, encodeQueryString(valueSeparator))) {
    debugger;
    throw makeAssertionError();
  }
  if ($equals_1(hierarchySeparator, encodeQueryString(hierarchySeparator))) {
    debugger;
    throw makeAssertionError();
  }
  if ($equals_1(paramSeparator, encodeQueryString(paramSeparator))) {
    debugger;
    throw makeAssertionError();
  }
  if ($equals_1(hierarchySeparator, '%')) {
    debugger;
    throw makeAssertionError();
  }
  if ($equals_1(paramSeparator, '%')) {
    debugger;
    throw makeAssertionError();
  }
  if ($equals_1(valueSeparator, '%')) {
    debugger;
    throw makeAssertionError();
  }
  this.hierarchySeparator = hierarchySeparator;
  this.paramSeparator = paramSeparator;
  this.valueSeparator = valueSeparator;
}

defineSeed(266, 1, {}, ParameterTokenFormatter_0);
_.toHistoryToken = function toHistoryToken(placeRequestHierarchy){
  var i, out;
  out = new StringBuilder_0;
  for (i = 0; i < placeRequestHierarchy.size_1(); ++i) {
    i != 0 && $append_1(out, this.hierarchySeparator);
    $append_1(out, $placeTokenToUnescapedString(this, dynamicCast(placeRequestHierarchy.get_3(i), Q$PlaceRequest)));
  }
  return $toString_2(out);
}
;
_.toPlaceRequestHierarchy = function toPlaceRequestHierarchy(historyToken){
  var result, split_0, unescapedHistoryToken, unescapedPlaceToken, unescapedPlaceToken$array, unescapedPlaceToken$index, unescapedPlaceToken$max, unescapedPlaceTokens;
  unescapedHistoryToken = decodeQueryString(historyToken);
  split_0 = $indexOf_1(unescapedHistoryToken, this.hierarchySeparator);
  result = new ArrayList_0;
  if (split_0 == -1) {
    result.add_1($unescapedStringToPlaceRequest(this, unescapedHistoryToken));
  }
   else {
    unescapedPlaceTokens = $split_0(unescapedHistoryToken, this.hierarchySeparator);
    if (unescapedPlaceTokens.length == 0) {
      throw new TokenFormatException_0('Bad parameter: nothing in the history token.');
    }
    for (unescapedPlaceToken$array = unescapedPlaceTokens , unescapedPlaceToken$index = 0 , unescapedPlaceToken$max = unescapedPlaceToken$array.length; unescapedPlaceToken$index < unescapedPlaceToken$max; ++unescapedPlaceToken$index) {
      unescapedPlaceToken = unescapedPlaceToken$array[unescapedPlaceToken$index];
      if ($isEmpty(unescapedPlaceToken)) {
        throw new TokenFormatException_0("Bad parameter: Successive place tokens require a single '" + this.hierarchySeparator + "' between them.");
      }
      result.add_1($unescapedStringToPlaceRequest(this, unescapedPlaceToken));
    }
  }
  return result;
}
;
function $$init_208(){
}

function $getNameToken(this$static){
  return this$static.nameToken;
}

function PlaceImpl_0(nameToken){
  Object_1.call(this);
  $$init_208();
  this.nameToken = nameToken;
}

defineSeed(267, 1, makeCastMap([Q$Place]), PlaceImpl_0);
_.canReveal = function canReveal(){
  return true;
}
;
_.equals$ = function equals_1(o){
  var place;
  if (instanceOf(o, Q$Place)) {
    place = dynamicCast(o, Q$Place);
    return $equals_1($getNameToken(this), place.getNameToken());
  }
  return false;
}
;
_.getNameToken = function getNameToken(){
  return $getNameToken(this);
}
;
_.hashCode$ = function hashCode_3(){
  return 17 * $hashCode_1($getNameToken(this));
}
;
_.matchesRequest = function matchesRequest(request){
  return $matchesNameToken(request, $getNameToken(this));
}
;
_.toString$ = function toString_7(){
  return $getNameToken(this);
}
;
function $$init_209(this$static){
  this$static.placeHierarchy = new ArrayList_0;
}

function $confirmLeaveState(this$static){
  var confirmed;
  if (jsEquals(this$static.onLeaveQuestion, null)) {
    return true;
  }
  confirmed = confirm_0(this$static.onLeaveQuestion);
  if (confirmed) {
    $setOnLeaveConfirmation(this$static, null);
  }
   else {
    fire_10(this$static);
    $setBrowserHistoryToken(this$static.currentHistoryToken, false);
  }
  return confirmed;
}

function $doRevealPlace(this$static, request, updateBrowserUrl){
  var requestEvent;
  requestEvent = new PlaceRequestInternalEvent_0(request, updateBrowserUrl);
  $fireEvent_2(this$static, requestEvent);
  if ($isHandled(requestEvent)) {
    if (!$isAuthorized(requestEvent)) {
      $unlock(this$static);
      $illegalAccess(this$static, this$static.tokenFormatter.toHistoryToken(this$static.placeHierarchy));
    }
  }
   else {
    $unlock(this$static);
    $error_0(this$static, this$static.tokenFormatter.toHistoryToken(this$static.placeHierarchy));
  }
}

function $error_0(this$static){
  $startError(this$static);
  $revealErrorPlace(this$static);
  $stopError(this$static);
}

function $fireEvent_2(this$static, event_0){
  $getEventBus_0(this$static).fireEventFromSource(event_0, this$static);
}

function $getBrowserHistoryToken(){
  return getToken();
}

function $getCurrentPlaceRequest(this$static){
  return this$static.placeHierarchy.size_1() > 0?dynamicCast(this$static.placeHierarchy.get_3(this$static.placeHierarchy.size_1() - 1), Q$PlaceRequest):$build(new PlaceRequest$Builder_0);
}

function $getEventBus_0(this$static){
  return this$static.eventBus;
}

function $getLock(this$static){
  if (this$static.locked) {
    return false;
  }
  if (!$confirmLeaveState(this$static)) {
    return false;
  }
  $lock(this$static);
  return true;
}

function $hasPendingNavigation(this$static){
  return isNotNull(this$static.defferedNavigation);
}

function $illegalAccess(this$static, historyToken){
  $startError(this$static);
  $revealUnauthorizedPlace(this$static);
  $stopError(this$static);
}

function $lock(this$static){
  if (!this$static.locked) {
    this$static.locked = true;
    fire_8(this$static, true);
  }
}

function $onValueChange(this$static, event_0){
  var historyToken;
  if (this$static.locked) {
    this$static.defferedNavigation = new PlaceManagerImpl$1_0(this$static, event_0);
    return;
  }
  if (!$getLock(this$static)) {
    return;
  }
  historyToken = dynamicCast($getValue(event_0), Q$String);
  try {
    if ($equals_1($trim(historyToken), '')) {
      $unlock(this$static);
      this$static.revealDefaultPlace();
    }
     else {
      this$static.placeHierarchy = this$static.tokenFormatter.toPlaceRequestHierarchy(historyToken);
      $doRevealPlace(this$static, $getCurrentPlaceRequest(this$static), true);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$TokenFormatException)) {
      $e0;
      $unlock(this$static);
      $error_0(this$static);
      fire_9(this$static, null);
    }
     else 
      throw unwrap($e0);
  }
}

function $registerTowardsHistory(this$static){
  addValueChangeHandler(this$static);
}

function $revealErrorPlace(this$static){
  this$static.revealDefaultPlace();
}

function $revealPlace(this$static, request, updateBrowserUrl){
  if (this$static.locked) {
    this$static.defferedNavigation = new PlaceManagerImpl$2_0(this$static, request, updateBrowserUrl);
    return;
  }
  if (!$getLock(this$static)) {
    return;
  }
  this$static.placeHierarchy.clear_0();
  this$static.placeHierarchy.add_1(request);
  $doRevealPlace(this$static, request, updateBrowserUrl);
}

function $revealUnauthorizedPlace(this$static){
  $revealErrorPlace(this$static);
}

function $saveHistoryToken(this$static, historyToken){
  this$static.currentHistoryToken = historyToken;
}

function $setBrowserHistoryToken(historyToken, issueEvent){
  newItem(historyToken, issueEvent);
}

function $setOnLeaveConfirmation(this$static, question){
  if (jsEquals(question, null) && jsEquals(this$static.onLeaveQuestion, null)) {
    return;
  }
  jsNotEquals(question, null) && jsEquals(this$static.onLeaveQuestion, null) && (this$static.windowClosingHandlerRegistration = addWindowClosingHandler(this$static));
  jsEquals(question, null) && jsNotEquals(this$static.onLeaveQuestion, null) && this$static.windowClosingHandlerRegistration.removeHandler();
  this$static.onLeaveQuestion = question;
}

function $startError(this$static){
  if (this$static.internalError) {
    throw new RuntimeException_1('Encountered repeated errors resulting in an infinite loop. Make sure all users have access to the pages revealed by revealErrorPlace and revealUnauthorizedPlace. (Note that the default implementations call revealDefaultPlace)');
  }
  this$static.internalError = true;
}

function $stopError(this$static){
  this$static.internalError = false;
}

function $unlock(this$static){
  var navigation;
  if (this$static.locked) {
    this$static.locked = false;
    fire_8(this$static, false);
    if ($hasPendingNavigation(this$static)) {
      navigation = this$static.defferedNavigation;
      this$static.defferedNavigation = null;
      navigation.execute_1();
    }
  }
}

function PlaceManagerImpl_0(eventBus, tokenFormatter){
  Object_1.call(this);
  $$init_209(this);
  this.eventBus = eventBus;
  this.tokenFormatter = tokenFormatter;
  $registerTowardsHistory(this);
}

defineSeed(268, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler, Q$HasHandlers, Q$Window$ClosingHandler]));
_.fireEvent = function fireEvent_5(event_0){
  $fireEvent_2(this, event_0);
}
;
_.getCurrentPlaceRequest = function getCurrentPlaceRequest(){
  return $getCurrentPlaceRequest(this);
}
;
_.hasPendingNavigation = function hasPendingNavigation(){
  return $hasPendingNavigation(this);
}
;
_.onValueChange = function onValueChange(event_0){
  $onValueChange(this, event_0);
}
;
_.onWindowClosing = function onWindowClosing(event_0){
  $setMessage(event_0, this.onLeaveQuestion);
}
;
_.revealCurrentPlace = function revealCurrentPlace(){
  fireCurrentHistoryState();
}
;
_.unlock = function unlock(){
  $unlock(this);
}
;
_.updateHistory = function updateHistory(request, updateBrowserUrl){
  var browserHistoryToken, historyToken;
  try {
    if (!$hasSameNameToken(request, $getCurrentPlaceRequest(this))) {
      debugger;
      throw makeAssertionError_Object("Internal error, PlaceRequest passed toupdateHistory doesn't match the tail of the place hierarchy.");
    }
    this.placeHierarchy.set_0(this.placeHierarchy.size_1() - 1, request);
    if (updateBrowserUrl) {
      historyToken = this.tokenFormatter.toHistoryToken(this.placeHierarchy);
      browserHistoryToken = $getBrowserHistoryToken();
      (jsEquals(browserHistoryToken, null) || !$equals_1(browserHistoryToken, historyToken)) && $setBrowserHistoryToken(historyToken, false);
      $saveHistoryToken(this, historyToken);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$TokenFormatException)) {
      $e0;
    }
     else 
      throw unwrap($e0);
  }
}
;
_.currentHistoryToken = '';
_.internalError = false;
_.locked = false;
function $$init_210(){
}

function PlaceManagerImpl$1_0(this$0, val$event){
  this.this$0 = this$0;
  this.val$event = val$event;
  Object_1.call(this);
  $$init_210();
}

defineSeed(269, 1, {}, PlaceManagerImpl$1_0);
_.execute_1 = function execute_9(){
  $onValueChange(this.this$0, this.val$event);
}
;
function $$init_211(){
}

function PlaceManagerImpl$2_0(this$0, val$request, val$updateBrowserUrl){
  this.this$0 = this$0;
  this.val$request = val$request;
  this.val$updateBrowserUrl = val$updateBrowserUrl;
  Object_1.call(this);
  $$init_211();
}

defineSeed(270, 1, {}, PlaceManagerImpl$2_0);
_.execute_1 = function execute_10(){
  $revealPlace(this.this$0, this.val$request, this.val$updateBrowserUrl);
}
;
_.val$updateBrowserUrl = false;
function $$init_212(){
}

function $getNameToken_0(this$static){
  return this$static.nameToken;
}

function $getParameter(this$static, key, defaultValue){
  var value_0;
  value_0 = null;
  isNotNull(this$static.params) && (value_0 = dynamicCast(this$static.params.get_2(key), Q$String));
  jsEquals(value_0, null) && (value_0 = defaultValue);
  return value_0;
}

function $getParameterNames(this$static){
  return isNotNull(this$static.params)?this$static.params.keySet():emptySet();
}

function $hasSameNameToken(this$static, other){
  if (jsEquals(this$static.nameToken, null) || jsEquals(other.nameToken, null)) {
    return false;
  }
  return $equals_1(this$static.nameToken, other.nameToken);
}

function $matchesNameToken(this$static, nameToken){
  if (jsEquals(this$static.nameToken, null) || jsEquals(nameToken, null)) {
    return false;
  }
  return $equals_1(this$static.nameToken, nameToken);
}

function PlaceRequest_0(nameToken){
  Object_1.call(this);
  $$init_212();
  this.nameToken = nameToken;
  this.params = null;
}

function PlaceRequest_1(nameToken, params){
  Object_1.call(this);
  $$init_212();
  this.nameToken = nameToken;
  this.params = params;
}

defineSeed(271, 1, makeCastMap([Q$PlaceRequest]), PlaceRequest_0, PlaceRequest_1);
_.equals$ = function equals_2(obj){
  var req;
  if (instanceOf(obj, Q$PlaceRequest)) {
    req = dynamicCast(obj, Q$PlaceRequest);
    if (jsEquals(this.nameToken, null) || jsEquals(req.nameToken, null)) {
      return false;
    }
    if (!$equals_1(this.nameToken, req.nameToken)) {
      return false;
    }
    return isNull(this.params)?isNull(req.params):this.params.equals$(req.params);
  }
  return false;
}
;
_.hashCode$ = function hashCode_4(){
  if (jsEquals(this.nameToken, null)) {
    throw new RuntimeException_1('Cannot compute hashcode of PlaceRequest with a null nameToken');
  }
  return 11 * ($hashCode_1(this.nameToken) + (isNull(this.params)?0:this.params.hashCode$()));
}
;
function $$init_213(){
}

function $build(this$static){
  return new PlaceRequest_1(this$static.nameToken, this$static.params);
}

function $lazyInitializeParamMap(this$static){
  isNull(this$static.params) && (this$static.params = new LinkedHashMap_0);
}

function $nameToken(this$static, nameToken){
  this$static.nameToken = nameToken;
  return this$static;
}

function $with(this$static, name_0, value_0){
  $lazyInitializeParamMap(this$static);
  jsNotEquals(value_0, null) && this$static.params.put(name_0, value_0);
  return this$static;
}

function PlaceRequest$Builder_0(){
  Object_1.call(this);
  $$init_213();
}

defineSeed(272, 1, {}, PlaceRequest$Builder_0);
function $$init_214(this$static){
}

function $dispatch_11(this$static, handler){
  handler.onPlaceRequest(this$static);
}

function $getRequest(this$static){
  return this$static.request;
}

function $isAuthorized(this$static){
  return this$static.authorized;
}

function $isHandled(this$static){
  return this$static.handled;
}

function $setHandled(this$static){
  this$static.handled = true;
}

function $setUnauthorized(this$static){
  this$static.authorized = false;
}

function $shouldUpdateBrowserHistory(this$static){
  return this$static.updateBrowserHistory;
}

function PlaceRequestInternalEvent_0(request, updateBrowserHistory){
  GwtEvent_0.call(this);
  $$init_214(this);
  this.request = request;
  this.updateBrowserHistory = updateBrowserHistory;
}

function getType_20(){
  isNull(TYPE_13) && (TYPE_13 = new GwtEvent$Type_0);
  return TYPE_13;
}

defineSeed(273, 106, {}, PlaceRequestInternalEvent_0);
_.dispatch_0 = function dispatch_12(handler){
  $dispatch_11(this, dynamicCast(handler, Q$PlaceRequestInternalHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_13(){
  return getType_20();
}
;
_.authorized = true;
_.handled = false;
_.updateBrowserHistory = false;
var TYPE_13;
function $$init_215(){
}

function $bind_0(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function ProxyImpl_0(){
  Object_1.call(this);
  $$init_215();
}

defineSeed(274, 1, makeCastMap([Q$HasHandlers]));
_.fireEvent = function fireEvent_6(event_0){
  this.eventBus.fireEventFromSource(event_0, this);
}
;
_.getPresenter = function getPresenter(callback){
  $prepare(callback);
  this.presenter.get_1(callback);
  $checkLoading(callback);
}
;
function $$init_216(this$static){
  this$static.handlerContainer = new ProxyPlaceAbstract$ProxyHandlerContainer_0(this$static);
}

function $addDeferredCommand(command){
  get_1().scheduleDeferred(command);
}

function $addRegisteredHandler_0(this$static, type_0, handler){
  var registration;
  registration = this$static.eventBus.addHandler(type_0, handler);
  $registerHandler_0(this$static.handlerContainer, registration);
}

function $bind_1(this$static, placeManager, eventBus){
  this$static.placeManager = placeManager;
  this$static.eventBus = eventBus;
  $addRegisteredHandler_0(this$static, getType_20(), new ProxyPlaceAbstract$1_0(this$static));
  $addRegisteredHandler_0(this$static, getType_16(), new ProxyPlaceAbstract$2_0(this$static));
}

function $canReveal(this$static){
  return this$static.place.canReveal();
}

function $getEventBus_1(this$static){
  return this$static.eventBus;
}

function $handleRequest(this$static, request, updateBrowserUrl){
  this$static.proxy.getPresenter(new ProxyPlaceAbstract$3_0(this$static, this$static.eventBus, request, updateBrowserUrl));
}

function $manualReveal(this$static, presenter){
  this$static.placeManager.hasPendingNavigation() || ($isVisible(presenter)?fire_11(this$static):$forceReveal(presenter));
  this$static.placeManager.unlock();
}

function $matchesRequest(this$static, request){
  return this$static.place.matchesRequest(request);
}

function $setPlace(this$static, place){
  this$static.place = place;
}

function $setProxy(this$static, proxy){
  this$static.proxy = proxy;
}

function ProxyPlaceAbstract_0(){
  Object_1.call(this);
  $$init_216(this);
}

defineSeed(275, 1, makeCastMap([Q$HasHandlers, Q$HasHandlerContainer, Q$Place]));
_.canReveal = function canReveal_0(){
  return $canReveal(this);
}
;
_.equals$ = function equals_3(o){
  return this.place.equals$(o);
}
;
_.fireEvent = function fireEvent_7(event_0){
  $getEventBus_1(this).fireEventFromSource(event_0, this);
}
;
_.getHandlerContainer = function getHandlerContainer(){
  return this.handlerContainer;
}
;
_.getNameToken = function getNameToken_0(){
  return this.place.getNameToken();
}
;
_.getPresenter = function getPresenter_0(callback){
  this.proxy.getPresenter(callback);
}
;
_.hashCode$ = function hashCode_5(){
  return this.place.hashCode$();
}
;
_.matchesRequest = function matchesRequest_0(request){
  return $matchesRequest(this, request);
}
;
_.toString$ = function toString_8(){
  return this.place.toString$();
}
;
function $$init_217(){
}

function ProxyPlaceAbstract$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_217();
}

defineSeed(276, 1, makeCastMap([Q$EventHandler, Q$PlaceRequestInternalHandler]), ProxyPlaceAbstract$1_0);
_.onPlaceRequest = function onPlaceRequest(event_0){
  var request;
  if ($isHandled(event_0)) {
    return;
  }
  request = $getRequest(event_0);
  if ($matchesRequest(this.this$0, request)) {
    $setHandled(event_0);
    $canReveal(this.this$0)?$handleRequest(this.this$0, request, $shouldUpdateBrowserHistory(event_0)):$setUnauthorized(event_0);
  }
}
;
function $$init_218(){
}

function ProxyPlaceAbstract$2_0(this$0){
  this , this$0;
  Object_1.call(this);
  $$init_218();
}

defineSeed(277, 1, makeCastMap([Q$EventHandler]), ProxyPlaceAbstract$2_0);
function $$init_219(){
}

function $success(this$static, presenter){
  $addDeferredCommand(new ProxyPlaceAbstract$3$1_0(this$static, presenter, this$static.val$request, this$static.val$updateBrowserUrl));
}

function ProxyPlaceAbstract$3_0(this$0, $anonymous0, val$request, val$updateBrowserUrl){
  this.this$0 = this$0;
  this.val$request = val$request;
  this.val$updateBrowserUrl = val$updateBrowserUrl;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
  $$init_219();
}

defineSeed(278, 263, {}, ProxyPlaceAbstract$3_0);
_.success = function success(presenter){
  $success(this, dynamicCast(presenter, Q$Presenter));
}
;
_.val$updateBrowserUrl = false;
function $$init_220(){
}

function ProxyPlaceAbstract$3$1_0(this$1, val$presenter, val$request, val$updateBrowserUrl){
  this.this$1 = this$1;
  this.val$presenter = val$presenter;
  this.val$request = val$request;
  this.val$updateBrowserUrl = val$updateBrowserUrl;
  Object_1.call(this);
  $$init_220();
}

defineSeed(279, 1, {}, ProxyPlaceAbstract$3$1_0);
_.execute_1 = function execute_11(){
  var originalRequest;
  originalRequest = this.this$1.this$0.placeManager.getCurrentPlaceRequest();
  $prepareFromRequest();
  jsEquals(originalRequest, this.this$1.this$0.placeManager.getCurrentPlaceRequest()) && this.this$1.this$0.placeManager.updateHistory(this.val$request, this.val$updateBrowserUrl);
  fire_9(this.this$1.this$0.placeManager, this.val$request);
  $useManualReveal() || $manualReveal(this.this$1.this$0, this.val$presenter);
}
;
_.val$updateBrowserUrl = false;
function $$init_221(){
}

function $registerHandler_0(this$static, handlerRegistration){
  $registerHandler(this$static, handlerRegistration);
  this$static.wasBound = true;
}

function ProxyPlaceAbstract$ProxyHandlerContainer_0(this$0){
  this.this$0 = this$0;
  HandlerContainerImpl_0.call(this);
  $$init_221();
}

defineSeed(280, 248, {}, ProxyPlaceAbstract$ProxyHandlerContainer_0);
_.bind_0 = function bind_3(){
  if (this.wasBound) {
    $bind(this);
    $bind_1(this.this$0, this.this$0.placeManager, this.this$0.eventBus);
  }
}
;
_.registerHandler = function registerHandler_0(handlerRegistration){
  $registerHandler_0(this, handlerRegistration);
}
;
_.wasBound = false;
function $$init_222(){
}

function ProxyPlaceImpl_0(){
  ProxyPlaceAbstract_0.call(this);
  $$init_222();
}

defineSeed(281, 275, makeCastMap([Q$HasHandlers, Q$HasHandlerContainer, Q$Place]));
function $clinit_ResetPresentersEvent(){
  $clinit_ResetPresentersEvent = nullMethod;
  type_1 = new GwtEvent$Type_0;
}

function $$init_223(){
}

function $dispatch_12(this$static, handler){
  handler.onResetPresenters(this$static);
}

function ResetPresentersEvent_0(){
  GwtEvent_0.call(this);
  $$init_223();
}

function fire_11(source){
  $clinit_ResetPresentersEvent();
  source.fireEvent(new ResetPresentersEvent_0);
}

function getType_21(){
  $clinit_ResetPresentersEvent();
  return type_1;
}

defineSeed(282, 106, {}, ResetPresentersEvent_0);
_.dispatch_0 = function dispatch_13(handler){
  $dispatch_12(this, dynamicCast(handler, Q$ResetPresentersHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_14(){
  return getType_21();
}
;
var type_1;
function $$init_224(){
}

function $dispatch_13(){
  null.nullMethod();
}

function $getAssociatedType(this$static){
  return this$static.type_0;
}

function RevealContentEvent_0(type_0, content_0){
  GwtEvent_0.call(this);
  $$init_224();
  this.type_0 = type_0;
  this , content_0;
}

function fire_12(source, type_0, content_0){
  source.fireEvent(new RevealContentEvent_0(type_0, content_0));
}

defineSeed(283, 106, {}, RevealContentEvent_0);
_.dispatch_0 = function dispatch_14(handler){
  $dispatch_13(dynamicCast(handler, Q$RevealContentHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_15(){
  return $getAssociatedType(this);
}
;
function $clinit_RevealRootContentEvent(){
  $clinit_RevealRootContentEvent = nullMethod;
  TYPE_14 = new GwtEvent$Type_0;
}

function $$init_225(){
}

function $dispatch_14(this$static, handler){
  handler.onRevealRootContent(this$static);
}

function $getContent(this$static){
  return this$static.content_0;
}

function RevealRootContentEvent_0(content_0){
  GwtEvent_0.call(this);
  $$init_225();
  this.content_0 = content_0;
}

function fire_13(source, content_0){
  $clinit_RevealRootContentEvent();
  source.fireEvent(new RevealRootContentEvent_0(content_0));
}

function getType_22(){
  $clinit_RevealRootContentEvent();
  return TYPE_14;
}

defineSeed(284, 106, {}, RevealRootContentEvent_0);
_.dispatch_0 = function dispatch_15(handler){
  $dispatch_14(this, dynamicCast(handler, Q$RevealRootContentHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_16(){
  return getType_22();
}
;
var TYPE_14;
function $clinit_RevealRootLayoutContentEvent(){
  $clinit_RevealRootLayoutContentEvent = nullMethod;
  TYPE_15 = new GwtEvent$Type_0;
}

function $$init_226(){
}

function $dispatch_15(this$static, handler){
  handler.onRevealRootLayoutContent(this$static);
}

function $getContent_0(this$static){
  return this$static.content_0;
}

function RevealRootLayoutContentEvent_0(content_0){
  GwtEvent_0.call(this);
  $$init_226();
  this.content_0 = content_0;
}

function fire_14(source, content_0){
  $clinit_RevealRootLayoutContentEvent();
  source.fireEvent(new RevealRootLayoutContentEvent_0(content_0));
}

function getType_23(){
  $clinit_RevealRootLayoutContentEvent();
  return TYPE_15;
}

defineSeed(285, 106, {}, RevealRootLayoutContentEvent_0);
_.dispatch_0 = function dispatch_16(handler){
  $dispatch_15(this, dynamicCast(handler, Q$RevealRootLayoutContentHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_17(){
  return getType_23();
}
;
var TYPE_15;
function $clinit_RevealRootPopupContentEvent(){
  $clinit_RevealRootPopupContentEvent = nullMethod;
  TYPE_16 = new GwtEvent$Type_0;
}

function $$init_227(){
}

function $dispatch_16(this$static, handler){
  handler.onRevealRootPopupContent(this$static);
}

function $getContent_1(this$static){
  return this$static.content_0;
}

function $isCentered(this$static){
  return this$static.center;
}

function RevealRootPopupContentEvent_0(content_0, center){
  GwtEvent_0.call(this);
  $$init_227();
  this.content_0 = content_0;
  this.center = center;
}

function fire_15(source, content_0){
  $clinit_RevealRootPopupContentEvent();
  fire_16(source, content_0, true);
}

function fire_16(source, content_0, center){
  source.fireEvent(new RevealRootPopupContentEvent_0(content_0, center));
}

function getType_24(){
  $clinit_RevealRootPopupContentEvent();
  return TYPE_16;
}

defineSeed(286, 106, {}, RevealRootPopupContentEvent_0);
_.dispatch_0 = function dispatch_17(handler){
  $dispatch_16(this, dynamicCast(handler, Q$RevealRootPopupContentHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_18(){
  return getType_24();
}
;
_.center = false;
var TYPE_16;
function $$init_228(){
}

function TokenFormatException_0(message){
  RuntimeException_1.call(this, message);
  $$init_228();
}

defineSeed(287, 19, makeCastMap([Q$TokenFormatException, Q$Serializable, Q$Exception, Q$Throwable]), TokenFormatException_0);
function $$init_229(this$static){
}

function $com$gwtplatform$mvp$client$proxy$ParameterTokenFormatter_com$gwtplatform$mvp$client$proxy$ParameterTokenFormatter_methodInjection(){
  return new ParameterTokenFormatter_0;
}

function $get_Key$type$com$gwtplatform$mvp$client$proxy$ParameterTokenFormatter$_annotation$$none$$(){
  var result;
  result = $com$gwtplatform$mvp$client$proxy$ParameterTokenFormatter_com$gwtplatform$mvp$client$proxy$ParameterTokenFormatter_methodInjection();
  $memberInject_Key$type$com$gwtplatform$mvp$client$proxy$ParameterTokenFormatter$_annotation$$none$$();
  return result;
}

function $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$(this$static){
  var result;
  if (isNull(this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$)) {
    result = $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$ClientPlaceManager$_annotation$$none$$($getFragment_fr_emmenemoi_gwt_widgets_jwplayer_example_client_place(this$static.injector));
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$;
}

function $get_Key$type$com$gwtplatform$mvp$client$proxy$TokenFormatter$_annotation$$none$$(this$static){
  var result;
  if (isNull(this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$TokenFormatter$_annotation$$none$$)) {
    result = $get_Key$type$com$gwtplatform$mvp$client$proxy$ParameterTokenFormatter$_annotation$$none$$();
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$TokenFormatter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$TokenFormatter$_annotation$$none$$;
}

function $memberInject_Key$type$com$gwtplatform$mvp$client$proxy$ParameterTokenFormatter$_annotation$$none$$(){
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_6(injector){
  Object_1.call(this);
  $$init_229(this);
  this.injector = injector;
}

defineSeed(288, 1, {}, fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_6);
_.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$ = null;
_.singleton_Key$type$com$gwtplatform$mvp$client$proxy$TokenFormatter$_annotation$$none$$ = null;
function $clinit_JWPlayer(){
  $clinit_JWPlayer = nullMethod;
  $clinit_UIObject();
  'jwplayerDivID_';
  'jwplayerID_';
  compile('([%0-9]+)');
  _waitingPlayers = new ArrayList_0;
}

function $$init_230(this$static){
  this$static.logger = getLogger($getName_0(Lfr_emmenemoi_gwt_widgets_jwplayer_client_JWPlayer_2_classLit));
}

function $_remove(this$static){
  this$static.jwplayer_0.remove();
}

function $getCloudSrc(){
  return 'http://jwpsrv.com/library/' + cloudKey + '.js';
}

function $hasSomethingToPlay(this$static){
  return jsNotEquals(this$static.options.playlist_0, null) && this$static.options.playlist_0.length > 0 || jsNotEquals(this$static.options.file_0, null) && jsNotEquals(this$static.options.file_0, '');
}

function $initEmptyInnerDiv(this$static){
  'NO Flash!!';
  $setInnerHTML($getElement(this$static), '<div id="' + this$static.playerId + '">' + 'NO Flash!!' + '<\/div>');
}

function $initPlayer(this$static){
  if (!this$static.playerLoaded) {
    $setVisible(this$static, false);
    if ($hasSomethingToPlay(this$static)) {
      $initEmptyInnerDiv(this$static);
      $onBeforePlayerLoaded();
      $setVisible(this$static, true);
      $loadPlayer(this$static, this$static.playerId);
      $onAfterPlayerLoaded();
    }
  }
}

function $loadPlayer(this$static, id_0){
  var jwplayerGWT = this$static;
  var options = this$static.options.toJS();
  options.events = {onPause:function(state){
    jwplayerGWT.onPause(state);
  }
  , onError:function(message){
    jwplayerGWT.onError(message);
  }
  , onIdle:function(state){
    jwplayerGWT.onIdle(state);
  }
  , onReady:function(){
    jwplayerGWT.onReady();
  }
  , onBuffer:function(state){
    jwplayerGWT.onBuffer(state);
  }
  , onComplete:function(){
    jwplayerGWT.onComplete();
  }
  , onMeta:function(event_0){
    if (event_0.type == 'jwplayerMediaMeta') {
      jwplayerGWT.onPlayerMediaMeta(event_0.metadata);
    }
     else if (event_0.metadata.type != null && event_0.metadata.type == 'metadata' || event_0.metadata.bandwidth != null) {
      jwplayerGWT.onMetadata(event_0.metadata);
    }
  }
  };
  this$static.jwplayer_0 = $wnd.jwplayer(id_0).setup(options);
  if (this$static.hasSomethingToPlay()) {
    $wnd.jwplayer(id_0).play(true);
  }
}

function $loadSources(this$static, sources){
  this$static.options.playlist_0 = dynamicCast($toArray(sources, this$static.options.playlist_0), Q$JWPlayerOptions$JWPlayerPlaylistSource_$1);
  if (this$static.playerLoaded) {
    $loadPlayer(this$static, this$static.playerId);
    $setVisible(this$static, true);
  }
   else 
    scriptLoaded && $initPlayer(this$static);
}

function $loadURL(this$static, url_0){
  this$static.options.file_0 = url_0;
  if (this$static.playerLoaded) {
    $loadPlayer(this$static, this$static.playerId);
    $setVisible(this$static, true);
  }
   else 
    scriptLoaded && $initPlayer(this$static);
}

function $onAfterPlayerLoaded(){
}

function $onBeforePlayerLoaded(){
}

function JWPlayer_0(){
  $clinit_JWPlayer();
  JWPlayer_1.call(this, new JWPlayerOptions_0);
}

function JWPlayer_1(options){
  var element;
  Widget_0.call(this);
  $$init_230(this);
  this.options = options;
  count_0 == 0 && !scriptLoaded && $inject($setWindow($setCallback(fromUrl($getCloudSrc()), new JWPlayer$1_0(this)), ($clinit_ScriptInjector() , TOP_WINDOW)));
  this.playerId = 'jwplayerID_' + count_0;
  this.playerDivId = 'jwplayerDivID_' + count_0;
  ++count_0;
  element = createElement('div');
  setElementProperty(element, 'id', this.playerDivId);
  $setElement(this, element);
}

function initPlayers(){
  $clinit_JWPlayer();
  var p, p$iterator;
  for (p$iterator = _waitingPlayers.iterator(); p$iterator.hasNext();) {
    p = dynamicCast(p$iterator.next_0(), Q$JWPlayer);
    $initPlayer(p);
  }
}

defineSeed(289, 195, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$JWPlayer]), JWPlayer_0);
_.hasSomethingToPlay = function hasSomethingToPlay(){
  return $hasSomethingToPlay(this);
}
;
_.onBuffer = function onBuffer(state){
  $log_0(this.logger, ($clinit_Level() , FINE), 'JWPlayer Buffer from ' + getOldState__devirtual$(state));
  $fireEvent_1(this, new JWPlayerEvent_0(state));
}
;
_.onComplete = function onComplete_1(){
  $log_0(this.logger, ($clinit_Level() , FINE), 'JWPlayer complete');
}
;
_.onError = function onError(message){
  $log_0(this.logger, ($clinit_Level() , FINE), 'JWPlayer Error from ' + message);
}
;
_.onIdle = function onIdle(state){
  $log_0(this.logger, ($clinit_Level() , FINE), 'JWPlayer Idle from ' + getOldState__devirtual$(state));
  $fireEvent_1(this, new JWPlayerEvent_0(state));
}
;
_.onLoad = function onLoad_2(){
  scriptLoaded?$initPlayer(this):$add_6(_waitingPlayers, this);
  $onLoad();
}
;
_.onMetadata = function onMetadata(meta){
  $log_0(this.logger, ($clinit_Level() , FINE), 'JWPlayer Metadata from ' + meta);
}
;
_.onPause = function onPause(state){
  $log_0(this.logger, ($clinit_Level() , FINE), 'JWPlayer Pause from ' + getOldState__devirtual$(state));
  $fireEvent_1(this, new JWPlayerEvent_0(state));
}
;
_.onPlayerMediaMeta = function onPlayerMediaMeta(meta){
  $log_0(this.logger, ($clinit_Level() , FINE), 'JWPlayer PlayerMediaMeta : { bandwidth: ' + $getBandwidth(meta) + ' , currentLevel: ' + $getCurrentLevel(meta) + ', droppedFrames: ' + $getDroppedFrames(meta) + ', width:' + $getMediaWidth(meta) + ' }');
  $fireEvent_1(this, new JWPlayerEvent_1(new JWPlayerStateImpl_0('PLAYING', 'PLAYING'), meta));
}
;
_.onReady = function onReady(){
  $log_0(this.logger, ($clinit_Level() , FINE), 'JWPlayer Ready to play : ' + this.options.file_0);
  this.playerLoaded = true;
}
;
_.onUnload = function onUnload_0(){
  $_remove(this);
  this.playerLoaded = false;
  $onUnload();
}
;
_.playerLoaded = false;
var _waitingPlayers, cloudKey = '4+R8PsscEeO69iIACooLPQ', count_0 = 0, scriptLoaded = false;
function $$init_231(){
}

function $onFailure(){
  alert_0('JWPlayer Cloudhosted script load failed.');
}

function $onSuccess(){
  $clinit_JWPlayer() , scriptLoaded = true;
  initPlayers();
}

function JWPlayer$1_0(this$0){
  this , this$0;
  Object_1.call(this);
  $$init_231();
}

defineSeed(290, 1, {}, JWPlayer$1_0);
_.onFailure = function onFailure(reason){
  $onFailure(dynamicCast(reason, Q$Exception));
}
;
_.onSuccess = function onSuccess_0(result){
  $onSuccess(dynamicCast(result, Q$Void));
}
;
function $clinit_JWPlayerEvent(){
  $clinit_JWPlayerEvent = nullMethod;
  TYPE_17 = new GwtEvent$Type_0;
}

function $$init_232(){
}

function $dispatch_17(){
  null.nullMethod();
}

function JWPlayerEvent_0(state){
  $clinit_JWPlayerEvent();
  GwtEvent_0.call(this);
  $$init_232();
  this , state;
}

function JWPlayerEvent_1(state, playerMeta){
  $clinit_JWPlayerEvent();
  GwtEvent_0.call(this);
  $$init_232();
  this , state;
  this , playerMeta;
}

defineSeed(291, 106, {}, JWPlayerEvent_0, JWPlayerEvent_1);
_.dispatch_0 = function dispatch_18(handler){
  $dispatch_17(dynamicCast(handler, Q$JWPlayerEvent$JWPlayerEventHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_19(){
  return TYPE_17;
}
;
var TYPE_17;
function $getBandwidth(this$static){
  return this$static.bandwidth;
}

function $getCurrentLevel(this$static){
  return this$static.currentLevel;
}

function $getDroppedFrames(this$static){
  return this$static.droppedFrames;
}

function $getMediaWidth(this$static){
  return this$static.width;
}

function $$init_233(){
}

function $getOldState(this$static){
  return this$static.oldstate_0;
}

function JWPlayerStateImpl_0(oldstate, newstate){
  Object_1.call(this);
  $$init_233();
  this.oldstate_0 = oldstate;
  this , newstate;
}

defineSeed(293, 1, {}, JWPlayerStateImpl_0);
_.getOldState = function getOldState(){
  return $getOldState(this);
}
;
_.toString$ = function toString_9(){
  return '{ oldstate: ' + $getOldState(this) + ' , newstate: ' + $getOldState(this) + '}';
}
;
function $getOldState_0(this$static){
  return this$static.oldstate;
}

function $clinit_JWPlayerOptions(){
  $clinit_JWPlayerOptions = nullMethod;
  new JWPlayerOptions_0;
  '320';
  '240';
  'NO Flash!!';
  0;
}

function $$init_234(this$static){
  this$static.playlist_0 = initValues(_3Lfr_emmenemoi_gwt_widgets_jwplayer_client_jwplayeroptions_JWPlayerOptions$JWPlayerPlaylistSource_2_classLit, makeCastMap([Q$JWPlayerOptions$JWPlayerPlaylistSource_$1, Q$Serializable]), Q$JWPlayerOptions$JWPlayerPlaylistSource, []);
  this$static , '';
}

function JWPlayerOptions_0(){
  $clinit_JWPlayerOptions();
  Object_1.call(this);
  $$init_234(this);
}

defineSeed(295, 1, {}, JWPlayerOptions_0);
_.toJS = function toJS(){
  var jsArray = {width:this.width_0, height:this.height, primary:this.primary, fallbackContent:this.fallbackContent, fallback:this.fallback, autostart:this.autostart, bufferlength:this.bufferlength, rtmp:{bufferlength:this.bufferlength}};
  if (this.playlist_0 != null && this.playlist_0.length > 0) {
    var list = [];
    debugger;
    for (var source in this.playlist_0) {
      list[list.length] = source.toJS;
    }
    jsArray.playlist = [{sources:list}];
  }
   else {
    jsArray.file = this.file_0;
  }
  return jsArray;
}
;
_.autostart = true;
_.bufferlength = 0;
_.fallback = true;
_.fallbackContent = 'NO Flash!!';
_.height = '240';
_.primary = 'flash';
_.width_0 = '320';
function $$init_235(){
}

function JWPlayerPlaylistSourceImpl_0(file){
  Object_1.call(this);
  $$init_235();
  this.file_0 = file;
}

defineSeed(296, 1, makeCastMap([Q$JWPlayerOptions$JWPlayerPlaylistSource]), JWPlayerPlaylistSourceImpl_0);
_.toJS = function toJS_0(){
  return {file:this.file_0};
}
;
function $$init_236(this$static){
  this$static.ginjector = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjectorImpl_0;
}

function $onModuleLoad_1(this$static){
  bind_0(this$static.ginjector);
  this$static.ginjector.getPlaceManager().revealCurrentPlace();
}

function Gwtjwplayerwrapper_0(){
  Object_1.call(this);
  $$init_236(this);
}

defineSeed(297, 1, {}, Gwtjwplayerwrapper_0);
function $$init_237(){
}

function MainPagePresenter_0(eventBus, view, proxy, placeManager){
  Presenter_0.call(this, eventBus, view, proxy);
  $$init_237();
  this , placeManager;
}

defineSeed(298, 250, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$Presenter, Q$PresenterWidget]), MainPagePresenter_0);
_.onBind = function onBind_1(){
  $onBind();
  this.registerHandler(dynamicCast($getView(this), Q$MainPagePresenter$MyView).getSendClickHandlers().addClickHandler(new MainPagePresenter$1_0(this)));
  this.registerHandler(dynamicCast($getView(this), Q$MainPagePresenter$MyView).getSourcesClickHandlers().addClickHandler(new MainPagePresenter$2_0(this)));
}
;
_.onReset = function onReset_0(){
  $onReset();
  dynamicCast($getView(this), Q$MainPagePresenter$MyView).resetAndFocus();
}
;
_.revealInParent = function revealInParent_0(){
  fire_13(this, this);
}
;
function $$init_238(){
}

function MainPagePresenter$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_238();
}

defineSeed(299, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MainPagePresenter$1_0);
_.onClick = function onClick(event_0){
  dynamicCast($getView(this.this$0), Q$MainPagePresenter$MyView).playURL();
}
;
function $$init_239(){
}

function MainPagePresenter$2_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_239();
}

defineSeed(300, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), MainPagePresenter$2_0);
_.onClick = function onClick_0(event_0){
  dynamicCast($getView(this.this$0), Q$MainPagePresenter$MyView).playSources();
}
;
function $$init_240(){
}

function MainPagePresenterMyProxyImpl_0(){
  ProxyPlaceImpl_0.call(this);
  $$init_240();
  register(this);
}

defineSeed(301, 281, makeCastMap([Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$MainPagePresenter$MyProxy]), MainPagePresenterMyProxyImpl_0);
_.delayedBind = function delayedBind(baseGinjector){
  var wrappedProxy;
  this.ginjector = dynamicCast(baseGinjector, Q$ClientGinjector);
  $bind_1(this, this.ginjector.getPlaceManager(), this.ginjector.getEventBus());
  wrappedProxy = new MainPagePresenterMyProxyImpl$WrappedProxy_0;
  $delayedBind(wrappedProxy, this.ginjector);
  $setProxy(this, wrappedProxy);
  'main';
  null;
  $setPlace(this, new PlaceImpl_0('main'));
}
;
function $$init_241(){
}

function $delayedBind(this$static, baseGinjector){
  this$static.ginjector = dynamicCast(baseGinjector, Q$ClientGinjector);
  $bind_0(this$static, (this$static.ginjector.getPlaceManager() , this$static.ginjector.getEventBus()));
  this$static.presenter = new StandardProvider_0(this$static.ginjector.getMainPagePresenter());
}

function MainPagePresenterMyProxyImpl$WrappedProxy_0(){
  ProxyImpl_0.call(this);
  $$init_241();
}

defineSeed(302, 274, makeCastMap([Q$HasHandlers, Q$DelayedBind]), MainPagePresenterMyProxyImpl$WrappedProxy_0);
_.delayedBind = function delayedBind_0(baseGinjector){
  $delayedBind(this, baseGinjector);
}
;
function $$init_242(this$static){
  this$static.panel = new HTMLPanel_0('<h1>Web Application Starter Project<\/h1>\n<table align="center">\n  <tr>\n    <td colspan="3" style="font-weight:bold;">Please enter your movie URL:<\/td>\n  <\/tr>\n  <tr>\n    <td id="nameFieldContainer"><\/td>\n    <td id="sendButtonContainer"><\/td>\n    <td id="sourcesButtonContainer"><\/td>\n    <td id="playerContainer"><\/td>\n  <\/tr>\n  <tr>\n    <td colspan="3" style="color:red;" id="errorLabelContainer"><\/td>\n  <\/tr>\n<\/table>\n');
}

function MainPageView_0(){
  ViewImpl_0.call(this);
  $$init_242(this);
  this.sendButton = new Button_1('Play URL');
  this.sourcesButton = new Button_1('Play Sources');
  this.nameField = new TextBox_0;
  $setText(this.nameField, 'http://content.jwplatform.com/videos/HkauGhRi-640.mp4');
  this.errorLabel = new Label_0;
  this.player = new JWPlayer_0;
  $addStyleName(this.sendButton, 'sendButton');
  $addStyleName(this.sourcesButton, 'sourceButton');
  $add_4(this.panel, this.nameField, 'nameFieldContainer');
  $add_4(this.panel, this.sendButton, 'sendButtonContainer');
  $add_4(this.panel, this.sourcesButton, 'sourcesButtonContainer');
  $add_4(this.panel, this.errorLabel, 'errorLabelContainer');
  $add_4(this.panel, this.player, 'playerContainer');
}

defineSeed(303, 255, makeCastMap([Q$IsWidget, Q$MainPagePresenter$MyView]), MainPageView_0);
_.asWidget = function asWidget_3(){
  return this.panel;
}
;
_.getSendClickHandlers = function getSendClickHandlers(){
  return this.sendButton;
}
;
_.getSourcesClickHandlers = function getSourcesClickHandlers(){
  return this.sourcesButton;
}
;
_.playSources = function playSources(){
  var sources, src_0, srcRtmp, url_0;
  sources = new ArrayList_0;
  url_0 = $getValue_1(this.nameField);
  url_0 = $replace(url_0, 'http', 'rtmp');
  url_0 = $replace(url_0, '/playlist.m3u8', '');
  srcRtmp = new JWPlayerPlaylistSourceImpl_0(url_0);
  $add_6(sources, srcRtmp);
  src_0 = new JWPlayerPlaylistSourceImpl_0($getValue_1(this.nameField));
  $add_6(sources, src_0);
  $loadSources(this.player, sources);
}
;
_.playURL = function playURL(){
  $loadURL(this.player, $getValue_1(this.nameField));
}
;
_.resetAndFocus = function resetAndFocus(){
  $setFocus(this.nameField, true);
  $selectAll(this.nameField);
}
;
function $$init_243(this$static){
}

function $fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter_fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter_methodInjection(_0, _1, _2, _3){
  return new MainPagePresenter_0(_0, _1, _2, _3);
}

function $fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView_fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView_methodInjection(){
  return new MainPageView_0;
}

function $get_Key$type$com$google$inject$Provider$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$$_annotation$$none$$(this$static){
  var result;
  result = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1_0(this$static);
  return result;
}

function $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyProxy$_annotation$$none$$(this$static){
  var created, result;
  if (isNull(this$static.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyProxy$_annotation$$none$$)) {
    created = new MainPagePresenterMyProxyImpl_0;
    if (!instanceOf(created, Q$MainPagePresenter$MyProxy)) {
      debugger;
      throw makeAssertionError();
    }
    result = dynamicCast(created, Q$MainPagePresenter$MyProxy);
    $memberInject_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyProxy$_annotation$$none$$();
    this$static.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyProxy$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyView$_annotation$$none$$(this$static){
  var result;
  result = $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView$_annotation$$none$$(this$static);
  return result;
}

function $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$_annotation$$none$$(this$static){
  var result;
  if (isNull(this$static.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$_annotation$$none$$)) {
    result = $fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter_fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyView$_annotation$$none$$(this$static), $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyProxy$_annotation$$none$$(this$static), $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)));
    $memberInject_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$_annotation$$none$$(this$static, result);
    this$static.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$_annotation$$none$$;
}

function $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView$_annotation$$none$$(this$static){
  var result;
  if (isNull(this$static.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView$_annotation$$none$$)) {
    result = $fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView_fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView_methodInjection();
    $memberInject_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView$_annotation$$none$$();
    this$static.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView$_annotation$$none$$;
}

function $initializeEagerSingletons_1(this$static){
  $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyProxy$_annotation$$none$$(this$static);
}

function $memberInject_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyProxy$_annotation$$none$$(){
}

function $memberInject_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$_annotation$$none$$(this$static, injectee){
  $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , injectee), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
}

function $memberInject_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView$_annotation$$none$$(){
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_8(injector){
  Object_1.call(this);
  $$init_243(this);
  this.injector = injector;
}

defineSeed(304, 1, {}, fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_8);
_.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$_annotation$$none$$ = null;
_.singleton_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPageView$_annotation$$none$$ = null;
function $$init_244(){
}

function $get_1(this$static){
  return $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$_annotation$$none$$(this$static.this$0);
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_244();
}

defineSeed(305, 1, {}, fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1_0);
_.get_0 = function get_9(){
  return $get_1(this);
}
;
function $$init_245(this$static){
  this$static.fieldfr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_0(this$static);
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjectorImpl_0(){
  Object_1.call(this);
  $$init_245(this);
  $initializeEagerSingletons_2(this.fieldfr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector);
}

defineSeed(306, 1, makeCastMap([Q$ClientGinjector]), fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjectorImpl_0);
_.getEventBus = function getEventBus(){
  return $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.fieldfr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector));
}
;
_.getMainPagePresenter = function getMainPagePresenter(){
  return $get_Key$type$com$google$inject$Provider$fr$emmenemoi$gwt$widgets$jwplayer$example$client$core$MainPagePresenter$$_annotation$$none$$($getFragment_fr_emmenemoi_gwt_widgets_jwplayer_example_client_core(this.fieldfr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector));
}
;
_.getPlaceManager = function getPlaceManager(){
  return $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.fieldfr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector));
}
;
function $$init_246(this$static){
}

function $getFragment_com_google_web_bindery_event_shared(this$static){
  isNull(this$static.fieldFragment_com$google$web$bindery$event$shared) && (this$static.fieldFragment_com$google$web$bindery$event$shared = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_0(this$static));
  return this$static.fieldFragment_com$google$web$bindery$event$shared;
}

function $getFragment_com_gwtplatform_dispatch_client_actionhandler(this$static){
  isNull(this$static.fieldFragment_com$gwtplatform$dispatch$client$actionhandler) && (this$static.fieldFragment_com$gwtplatform$dispatch$client$actionhandler = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_2(this$static));
  return this$static.fieldFragment_com$gwtplatform$dispatch$client$actionhandler;
}

function $getFragment_com_gwtplatform_mvp_client(this$static){
  isNull(this$static.fieldFragment_com$gwtplatform$mvp$client) && (this$static.fieldFragment_com$gwtplatform$mvp$client = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_4(this$static));
  return this$static.fieldFragment_com$gwtplatform$mvp$client;
}

function $getFragment_com_gwtplatform_mvp_client_proxy(this$static){
  isNull(this$static.fieldFragment_com$gwtplatform$mvp$client$proxy) && (this$static.fieldFragment_com$gwtplatform$mvp$client$proxy = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_6(this$static));
  return this$static.fieldFragment_com$gwtplatform$mvp$client$proxy;
}

function $getFragment_fr_emmenemoi_gwt_widgets_jwplayer_example_client_core(this$static){
  isNull(this$static.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$core) && (this$static.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$core = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_8(this$static));
  return this$static.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$core;
}

function $getFragment_fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin(this$static){
  isNull(this$static.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$gin) && (this$static.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$gin = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_10(this$static));
  return this$static.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$gin;
}

function $getFragment_fr_emmenemoi_gwt_widgets_jwplayer_example_client_place(this$static){
  isNull(this$static.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$place) && (this$static.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$place = new fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_12(this$static));
  return this$static.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$place;
}

function $initializeEagerSingletons_2(this$static){
  $initializeEagerSingletons_0($getFragment_com_gwtplatform_mvp_client(this$static));
  $initializeEagerSingletons_1($getFragment_fr_emmenemoi_gwt_widgets_jwplayer_example_client_core(this$static));
  $initializeEagerSingletons($getFragment_com_gwtplatform_dispatch_client_actionhandler(this$static));
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_0(fieldGinjectorInterface){
  Object_1.call(this);
  $$init_246(this);
  this , fieldGinjectorInterface;
}

defineSeed(307, 1, {}, fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_0);
_.fieldFragment_com$google$web$bindery$event$shared = null;
_.fieldFragment_com$gwtplatform$dispatch$client$actionhandler = null;
_.fieldFragment_com$gwtplatform$mvp$client = null;
_.fieldFragment_com$gwtplatform$mvp$client$proxy = null;
_.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$core = null;
_.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$gin = null;
_.fieldFragment_fr$emmenemoi$gwt$widgets$jwplayer$example$client$place = null;
function $$init_247(){
}

function $get_Key$type$java$lang$String$_annotation$$fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$DefaultPlace$(){
  'main';
  return 'main';
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_10(injector){
  Object_1.call(this);
  $$init_247();
  this , injector;
}

defineSeed(308, 1, {}, fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_10);
function $$init_248(){
}

function ClientPlaceManager_0(eventBus, tokenFormatter, defaultPlaceNameToken){
  PlaceManagerImpl_0.call(this, eventBus, tokenFormatter);
  $$init_248();
  this.defaultPlaceRequest = new PlaceRequest_0(defaultPlaceNameToken);
}

defineSeed(309, 268, makeCastMap([Q$ValueChangeHandler, Q$EventHandler, Q$HasHandlers, Q$Window$ClosingHandler]), ClientPlaceManager_0);
_.revealDefaultPlace = function revealDefaultPlace(){
  $revealPlace(this, this.defaultPlaceRequest, false);
}
;
function $$init_249(){
}

function $fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$ClientPlaceManager_fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$ClientPlaceManager_methodInjection(_0, _1, _2){
  return new ClientPlaceManager_0(_0, _1, _2);
}

function $get_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$ClientPlaceManager$_annotation$$none$$(this$static){
  var result;
  result = $fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$ClientPlaceManager_fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$ClientPlaceManager_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$gwtplatform$mvp$client$proxy$TokenFormatter$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)), $get_Key$type$java$lang$String$_annotation$$fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$DefaultPlace$($getFragment_fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin(this$static.injector)));
  $memberInject_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$ClientPlaceManager$_annotation$$none$$();
  return result;
}

function $memberInject_Key$type$fr$emmenemoi$gwt$widgets$jwplayer$example$client$place$ClientPlaceManager$_annotation$$none$$(){
}

function fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_12(injector){
  Object_1.call(this);
  $$init_249();
  this.injector = injector;
}

defineSeed(310, 1, {}, fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_12);
function $$init_250(){
}

function ArrayStoreException_0(){
  RuntimeException_0.call(this);
  $$init_250();
}

defineSeed(311, 19, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), ArrayStoreException_0);
function $$init_251(){
}

function Error_1(){
  Throwable_0.call(this);
  $$init_251();
}

function Error_2(message, cause){
  Throwable_2.call(this, message, cause);
  $$init_251();
}

defineSeed(313, 21, makeCastMap([Q$Serializable, Q$Throwable]));
function $$init_252(){
}

function AssertionError_0(){
  Error_1.call(this);
  $$init_252();
}

function AssertionError_1(message){
  Error_2.call(this, valueOf_16(message), instanceOf(message, Q$Throwable)?dynamicCast(message, Q$Throwable):null);
  $$init_252();
}

defineSeed(312, 313, makeCastMap([Q$Serializable, Q$Throwable]), AssertionError_0, AssertionError_1);
function $clinit_Boolean(){
  $clinit_Boolean = nullMethod;
  FALSE = new Boolean_1(false);
  TRUE = new Boolean_1(true);
  Z_classLit;
}

function $$init_253(){
}

function Boolean_1(value_0){
  Object_1.call(this);
  $$init_253();
  this.value_0 = value_0;
}

function valueOf_12(b){
  $clinit_Boolean();
  return b?TRUE:FALSE;
}

defineSeed(314, 1, makeCastMap([Q$Serializable, Q$Boolean, Q$Comparable]), Boolean_1);
_.equals$ = function equals_4(o){
  return instanceOf(o, Q$Boolean) && dynamicCast(o, Q$Boolean).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_6(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_10(){
  return this.value_0?'true':'false';
}
;
_.value_0 = false;
var FALSE, TRUE;
function $clinit_Character(){
  $clinit_Character = nullMethod;
  Ljava_lang_Character_2_classLit;
  2;
  36;
  0;
  65535;
  55296;
  57343;
  56320;
  57343;
  55296;
  56319;
  65536;
  0;
  1114111;
  16;
}

function getHighSurrogate(codePoint){
  $clinit_Character();
  return narrow_char(55296 + (~~(codePoint - 65536) >> 10 & 1023));
}

function getLowSurrogate(codePoint){
  $clinit_Character();
  return narrow_char(56320 + (codePoint - 65536 & 1023));
}

function $$init_254(){
}

function $desiredAssertionStatus(){
  return true;
}

function $getName_0(this$static){
  return this$static.typeName;
}

function $isInterface(this$static){
  return (this$static.modifiers & 2) != 0;
}

function $isPrimitive(this$static){
  return (this$static.modifiers & 1) != 0;
}

function Class_0(){
  Object_1.call(this);
  $$init_254();
}

function asString(number){
  return typeof number == 'number'?'S' + (number < 0?-number:number):number;
}

function createForArray(packageName, className, seedId, componentType){
  var clazz;
  clazz = new Class_0;
  setName_0(clazz, packageName, className, seedId != 0?-seedId:0);
  clazz.modifiers = 4;
  clazz , Ljava_lang_Object_2_classLit;
  clazz , componentType;
  return clazz;
}

function createForClass(packageName, className, seedId, superclass){
  var clazz;
  clazz = new Class_0;
  setName_0(clazz, packageName, className, seedId);
  clazz , superclass;
  return clazz;
}

function createForEnum(packageName, className, seedId, superclass, enumConstantsFunc, enumValueOfFunc){
  var clazz;
  clazz = new Class_0;
  setName_0(clazz, packageName, className, seedId);
  clazz.modifiers = isNotNull(enumConstantsFunc)?8:0;
  clazz , (clazz , superclass);
  clazz , enumConstantsFunc;
  clazz , enumValueOfFunc;
  return clazz;
}

function createForInterface(packageName, className){
  var clazz;
  clazz = new Class_0;
  setName_0(clazz, packageName, className, 0);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(packageName, className, seedId){
  var clazz;
  clazz = new Class_0;
  setName_0(clazz, packageName, className, seedId);
  clazz.modifiers = 1;
  return clazz;
}

function getSeedFunction(clazz){
  var func = ($clinit_SeedUtil() , seedTable)[clazz.seedId];
  clazz = null;
  return func;
}

function isClassMetadataEnabled(){
  return true;
}

function isInstantiable(seedId){
  return typeof seedId == 'number' && seedId > 0;
}

function isInstantiableOrPrimitive(seedId){
  return seedId != null && seedId != 0;
}

function setClassLiteral(seedId, clazz){
  var proto;
  clazz.seedId = seedId;
  if (seedId == 2) {
    proto = String.prototype;
  }
   else {
    if (seedId > 0) {
      var seed = getSeedFunction(clazz);
      if (seed) {
        proto = seed.prototype;
      }
       else {
        seed = ($clinit_SeedUtil() , seedTable)[seedId] = function(){
        }
        ;
        seed.___clazz$ = clazz;
        return;
      }
    }
     else {
      return;
    }
  }
  proto.___clazz$ = clazz;
}

function setName_0(clazz, packageName, className, seedId){
  if (clazz , isClassMetadataEnabled()) {
    clazz.typeName = packageName + className;
    clazz , className;
  }
   else {
    clazz.typeName = 'Class$' + (isInstantiableOrPrimitive(seedId)?asString(seedId):'' + clazz.hashCode$());
    clazz , clazz.typeName;
  }
  isInstantiable(seedId) && setClassLiteral(seedId, clazz);
}

defineSeed(316, 1, {}, Class_0);
_.toString$ = function toString_11(){
  return ($isInterface(this)?'interface ':$isPrimitive(this)?'':'class ') + $getName_0(this);
}
;
_.modifiers = 0;
_.seedId = 0;
function $$init_255(){
}

function ClassCastException_0(){
  RuntimeException_0.call(this);
  $$init_255();
}

defineSeed(317, 19, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), ClassCastException_0);
function $$init_256(){
}

function IllegalArgumentException_0(message){
  RuntimeException_1.call(this, message);
  $$init_256();
}

defineSeed(318, 19, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), IllegalArgumentException_0);
function $$init_257(){
}

function IllegalStateException_0(){
  RuntimeException_0.call(this);
  $$init_257();
}

function IllegalStateException_1(s){
  RuntimeException_1.call(this, s);
  $$init_257();
}

defineSeed(319, 19, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), IllegalStateException_0, IllegalStateException_1);
function $$init_258(){
}

function IndexOutOfBoundsException_0(){
  RuntimeException_0.call(this);
  $$init_258();
}

function IndexOutOfBoundsException_1(message){
  RuntimeException_1.call(this, message);
  $$init_258();
}

defineSeed(320, 19, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), IndexOutOfBoundsException_0, IndexOutOfBoundsException_1);
function $$init_259(){
}

function Number_1(){
  Object_1.call(this);
  $$init_259();
}

defineSeed(322, 1, makeCastMap([Q$Serializable, Q$Number]));
function $clinit_Integer(){
  $clinit_Integer = nullMethod;
  2147483647;
  -2147483648;
  32;
  I_classLit;
}

function $$init_260(){
}

function $intValue(this$static){
  return this$static.value_0;
}

function Integer_0(value_0){
  Number_1.call(this);
  $$init_260();
  this.value_0 = value_0;
}

function hashCode_8(i){
  return i;
}

function toHexString(value_0){
  $clinit_Integer();
  return toPowerOfTwoString(value_0, 4);
}

function toPowerOfTwoString(value_0, shift_0){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = narrow_int(32 / shift_0);
  bitMask = (1 << shift_0) - 1;
  buf = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, bufSize, 1);
  digits = ($clinit_Number$__Digits() , digits_0);
  pos = bufSize - 1;
  if (value_0 >= 0) {
    while (value_0 > bitMask) {
      buf[pos--] = digits[value_0 & bitMask];
      value_0 >>= shift_0;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value_0 & bitMask];
      value_0 >>= shift_0;
    }
  }
  buf[pos] = digits[value_0 & bitMask];
  return __valueOf(buf, pos, bufSize);
}

function toString_13(value_0){
  return valueOf_15(value_0);
}

function valueOf_13(i){
  $clinit_Integer();
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    isNull(result) && (result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase] = new Integer_0(i));
    return result;
  }
  return new Integer_0(i);
}

defineSeed(321, 322, makeCastMap([Q$Serializable, Q$Comparable, Q$Integer, Q$Number]), Integer_0);
_.equals$ = function equals_5(o){
  return instanceOf(o, Q$Integer) && dynamicCast(o, Q$Integer).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_7(){
  return hashCode_8(this.value_0);
}
;
_.toString$ = function toString_12(){
  return toString_13(this.value_0);
}
;
_.value_0 = 0;
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = nullMethod;
  boxedValues = initDim(_3Ljava_lang_Integer_2_classLit, makeCastMap([Q$Serializable]), Q$Integer, 256, 0);
}

var boxedValues;
function cos_0(x_0){
  return Math.cos(x_0);
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function $$init_261(){
}

function NullPointerException_0(){
  RuntimeException_0.call(this);
  $$init_261();
}

function NullPointerException_1(message){
  RuntimeException_1.call(this, message);
  $$init_261();
}

defineSeed(325, 19, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), NullPointerException_0, NullPointerException_1);
function $clinit_Number$__Digits(){
  $clinit_Number$__Digits = nullMethod;
  digits_0 = initValues(_3C_classLit, makeCastMap([Q$Serializable]), -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function $$init_262(){
}

function $getMethodName(this$static){
  return this$static.methodName;
}

function StackTraceElement_0(className, methodName, fileName, lineNumber){
  Object_1.call(this);
  $$init_262();
  this.className_0 = className;
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineSeed(327, 1, makeCastMap([Q$Serializable, Q$StackTraceElement]), StackTraceElement_0);
_.toString$ = function toString_14(){
  return this.className_0 + '.' + this.methodName + '(' + (jsNotEquals(this.fileName, null)?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
function $clinit_String(){
  $clinit_String = nullMethod;
  new String$1_0;
  'ISO-8859-1';
  'ISO-LATIN-1';
  'UTF-8';
}

function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $contains(this$static, s){
  return $indexOf_1(this$static, s.toString$()) != -1;
}

function $equals_1(this$static, other){
  if (!instanceOf(other, Q$String)) {
    return false;
  }
  return __equals(this$static, other);
}

function $equalsIgnoreCase(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function $hashCode_1(this$static){
  return getHashCode_0(this$static);
}

function $indexOf_0(this$static, codePoint){
  return $indexOf_1(this$static, fromCodePoint(codePoint));
}

function $indexOf_1(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_2(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $isEmpty(this$static){
  return !this$static.length;
}

function $lastIndexOf(this$static, codePoint){
  return $lastIndexOf_1(this$static, fromCodePoint(codePoint));
}

function $lastIndexOf_0(this$static, codePoint, startIndex){
  return $lastIndexOf_2(this$static, fromCodePoint(codePoint), startIndex);
}

function $lastIndexOf_1(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_2(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $length_1(this$static){
  return this$static.length;
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from.toString$(), '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to.toString$(), '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $split_0(this$static, regex){
  return $split_1(this$static, regex, 0);
}

function $split_1(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || (trail == '' || count == maxMatch - 1 && maxMatch > 0)) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    if (lastNonEmpty < out.length) {
      out.splice(lastNonEmpty, out.length - lastNonEmpty);
    }
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $startsWith(this$static, prefix){
  return $indexOf_1(this$static, prefix) == 0;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __createArray(numElements){
  return initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, numElements, 0);
}

function __equals(me, other){
  return String(me) == other;
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = $indexOf_2(replaceStr, '\\', pos))) {
    $charAt(replaceStr, pos + 1) == 36?(replaceStr = $substring_0(replaceStr, 0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = $substring_0(replaceStr, 0, pos) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x_0, start_0, end){
  $clinit_String();
  x_0 = x_0.slice(start_0, end);
  return String.fromCharCode.apply(null, x_0);
}

function fromCharCode(ch_0){
  return String.fromCharCode(ch_0);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = getHighSurrogate(codePoint);
    loSurrogate = getLowSurrogate(codePoint);
    return fromCharCode(hiSurrogate) + fromCharCode(loSurrogate);
  }
   else {
    return fromCharCode(narrow_char(codePoint));
  }
}

function valueOf_14(x_0){
  $clinit_String();
  return String.fromCharCode(x_0);
}

function valueOf_15(x_0){
  $clinit_String();
  return '' + x_0;
}

function valueOf_16(x_0){
  $clinit_String();
  return '' + x_0;
}

_ = String.prototype;
_.castableTypeMap$ = makeCastMap([Q$String, Q$Serializable, Q$CharSequence, Q$Comparable]);
_.equals$ = function equals_6(other){
  return $equals_1(this, other);
}
;
_.hashCode$ = function hashCode_9(){
  return $hashCode_1(this);
}
;
_.toString$ = _.toString;
function $$init_263(){
}

function String$1_0(){
  Object_1.call(this);
  $$init_263();
}

defineSeed(328, 1, {}, String$1_0);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = nullMethod;
  back_0 = createObject();
  front = createObject();
  256;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = $length_1(str);
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = $charAt(str, i + 3) + 31 * ($charAt(str, i + 2) + 31 * ($charAt(str, i + 1) + 31 * ($charAt(str, i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  if (result == null) {
    result = compute(str);
  }
  increment();
  return front[key] = result;
}

function increment(){
  if (count_1 == 256) {
    back_0 = front;
    front = createObject();
    count_1 = 0;
  }
  ++count_1;
}

var back_0, count_1 = 0, front;
function $$init_264(this$static){
  this$static.impl = new StringBufferImplAppend_0;
  this$static.data_0 = this$static.impl.createData();
}

function $append(this$static, x_0){
  this$static.impl.append(this$static.data_0, x_0);
  return this$static;
}

function $toString_1(this$static){
  return this$static.impl.toString_0(this$static.data_0);
}

function StringBuffer_0(){
  Object_1.call(this);
  $$init_264(this);
}

defineSeed(330, 1, makeCastMap([Q$CharSequence]), StringBuffer_0);
_.toString$ = function toString_15(){
  return $toString_1(this);
}
;
function $$init_265(this$static){
  this$static.impl = new StringBufferImplAppend_0;
  this$static.data_0 = this$static.impl.createData();
}

function $append_0(this$static, x_0){
  this$static.impl.appendNonNull(this$static.data_0, valueOf_14(x_0));
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.impl.append(this$static.data_0, x_0);
  return this$static;
}

function $toString_2(this$static){
  return this$static.impl.toString_0(this$static.data_0);
}

function StringBuilder_0(){
  Object_1.call(this);
  $$init_265(this);
}

function StringBuilder_1(s){
  Object_1.call(this);
  $$init_265(this);
  $append_1(this, s);
}

defineSeed(331, 1, makeCastMap([Q$CharSequence]), StringBuilder_0, StringBuilder_1);
_.toString$ = function toString_16(){
  return $toString_2(this);
}
;
function $$init_266(){
}

function UnsupportedOperationException_0(){
  RuntimeException_0.call(this);
  $$init_266();
}

function UnsupportedOperationException_1(message){
  RuntimeException_1.call(this, message);
  $$init_266();
}

defineSeed(332, 19, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), UnsupportedOperationException_0, UnsupportedOperationException_1);
function $$init_267(){
}

function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (jsEquals(o, null)?jsEquals(t, null):equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function AbstractCollection_0(){
  Object_1.call(this);
  $$init_267();
}

defineSeed(333, 1, {});
_.add_1 = function add_5(o){
  throw new UnsupportedOperationException_1('Add not supported on this collection');
}
;
_.addAll = function addAll(c){
  var changed, iter;
  iter = c.iterator();
  changed = false;
  while (iter.hasNext()) {
    this.add_1(iter.next_0()) && (changed = true);
  }
  return changed;
}
;
_.clear_0 = function clear_0(){
  var iter;
  iter = this.iterator();
  while (iter.hasNext()) {
    iter.next_0();
    iter.remove_1();
  }
}
;
_.contains_0 = function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator(), o);
  return isNotNull(iter);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_2 = function remove_4(o){
  var iter;
  iter = $advanceToFind(this.iterator(), o);
  if (isNotNull(iter)) {
    iter.remove_1();
    return true;
  }
   else {
    return false;
  }
}
;
_.toArray = function toArray(){
  return this.toArray_0(initDim(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, this.size_1(), 0));
}
;
_.toArray_0 = function toArray_0(a){
  var i, it, result, size_0;
  size_0 = this.size_1();
  a.length < size_0 && (a = createFrom(a, size_0));
  result = a;
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(result, i, it.next_0());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
_.toString$ = function toString_17(){
  var comma, iter, sb, value_0;
  sb = new StringBuffer_0;
  comma = null;
  $append(sb, '[');
  iter = this.iterator();
  while (iter.hasNext()) {
    jsNotEquals(comma, null)?$append(sb, comma):(comma = ', ');
    value_0 = iter.next_0();
    $append(sb, value_0 === this?'(this Collection)':valueOf_16(value_0));
  }
  $append(sb, ']');
  return $toString_1(sb);
}
;
function $$init_268(){
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), Q$Map$Entry);
    k = entry.getKey();
    if (jsEquals(key, null)?jsEquals(k, null):equals__devirtual$(key, k)) {
      if (remove) {
        entry = new MapEntryImpl_0(entry.getKey(), entry.getValue());
        iter.remove_1();
      }
      return entry;
    }
  }
  return null;
}

function $isEmpty_0(this$static){
  return this$static.size_1() == 0;
}

function AbstractMap_0(){
  Object_1.call(this);
  $$init_268();
}

defineSeed(335, 1, makeCastMap([Q$Map]));
_.clear_0 = function clear_1(){
  this.entrySet().clear_0();
}
;
_.containsKey = function containsKey(key){
  return isNotNull($implFindEntry(this, key, false));
}
;
_.containsValue = function containsValue(value_0){
  var entry, iter, v;
  for (iter = this.entrySet().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), Q$Map$Entry);
    v = entry.getValue();
    if (jsEquals(value_0, null)?jsEquals(v, null):equals__devirtual$(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals$ = function equals_7(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, Q$Map)) {
    return false;
  }
  otherMap = dynamicCast(obj, Q$Map);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!this.containsKey(otherKey)) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, this.get_2(otherKey))) {
      return false;
    }
  }
  return true;
}
;
_.get_2 = function get_10(key){
  var entry;
  entry = $implFindEntry(this, key, false);
  return isNull(entry)?null:entry.getValue();
}
;
_.hashCode$ = function hashCode_10(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}
;
_.isEmpty = function isEmpty_0(){
  return $isEmpty_0(this);
}
;
_.keySet = function keySet(){
  var entrySet;
  entrySet = this.entrySet();
  return new AbstractMap$1_0(this, entrySet);
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_1('Put not supported on this map');
}
;
_.remove_3 = function remove_5(key){
  var entry;
  entry = $implFindEntry(this, key, true);
  return isNull(entry)?null:entry.getValue();
}
;
_.size_1 = function size_1(){
  return this.entrySet().size_1();
}
;
_.toString$ = function toString_18(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = this.entrySet().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), Q$Map$Entry);
    comma?(s += ', '):(comma = true);
    s += valueOf_16(entry.getKey());
    s += '=';
    s += valueOf_16(entry.getValue());
  }
  return s + '}';
}
;
_.values = function values_12(){
  var entrySet;
  entrySet = this.entrySet();
  return new AbstractMap$2_0(this, entrySet);
}
;
function $$init_269(this$static){
  $clearImpl(this$static);
}

function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add_1(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new AbstractHashMap$MapEntryString_0(this$static, key.substring(1));
      dest.add_1(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = createArray();
  this$static.stringMap = createObject();
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size_0 = 0;
}

function $containsHashValue(this$static, value_0){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (this$static.equalsBridge(value_0, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}

function $containsStringValue(this$static, value_0){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = stringMap[key];
      if (this$static.equalsBridge(value_0, entryValue)) {
        return true;
      }
    }
  }
  return false;
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $getStringValue(this$static, key){
  return this$static.stringMap[':' + key];
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $putHashValue(this$static, key, value_0, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value_0);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = new MapEntryImpl_0(key, value_0);
  array.push(entry);
  ++this$static.size_0;
  return null;
}

function $putNullSlot(this$static, value_0){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value_0;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size_0;
  }
  return result;
}

function $putStringValue(this$static, key, value_0){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
  }
   else {
    ++this$static.size_0;
  }
  stringMap[key] = value_0;
  return result;
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        if (array.length == 1) {
          delete this$static.hashCodeMap[hashCode];
        }
         else {
          array.splice(i, 1);
        }
        --this$static.size_0;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size_0;
  }
  return result;
}

function $removeStringValue(this$static, key){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.size_0;
    delete stringMap[key];
  }
  return result;
}

function AbstractHashMap_0(){
  AbstractMap_0.call(this);
  $$init_269(this);
}

defineSeed(334, 335, makeCastMap([Q$Map]));
_.clear_0 = function clear_2(){
  $clearImpl(this);
}
;
_.containsKey = function containsKey_0(key){
  return jsEquals(key, null)?this.nullSlotLive:instanceOf(key, Q$String)?$hasStringValue(this, dynamicCast(key, Q$String)):$hasHashValue(this, key, this.getHashCode(key));
}
;
_.containsValue = function containsValue_0(value_0){
  if (this.nullSlotLive && this.equals(this.nullSlot, value_0)) {
    return true;
  }
   else if ($containsStringValue(this, value_0)) {
    return true;
  }
   else if ($containsHashValue(this, value_0)) {
    return true;
  }
  return false;
}
;
_.entrySet = function entrySet_0(){
  return new AbstractHashMap$EntrySet_0(this);
}
;
_.equalsBridge = function equalsBridge(value1, value2){
  return this.equals(value1, value2);
}
;
_.get_2 = function get_11(key){
  return jsEquals(key, null)?this.nullSlot:instanceOf(key, Q$String)?$getStringValue(this, dynamicCast(key, Q$String)):$getHashValue(this, key, this.getHashCode(key));
}
;
_.put = function put_0(key, value_0){
  return jsEquals(key, null)?$putNullSlot(this, value_0):instanceOf(key, Q$String)?$putStringValue(this, dynamicCast(key, Q$String), value_0):$putHashValue(this, key, value_0, this.getHashCode(key));
}
;
_.remove_3 = function remove_6(key){
  return jsEquals(key, null)?$removeNullSlot(this):instanceOf(key, Q$String)?$removeStringValue(this, dynamicCast(key, Q$String)):$removeHashValue(this, key, this.getHashCode(key));
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.nullSlotLive = false;
_.size_0 = 0;
function $$init_270(){
}

function AbstractSet_0(){
  AbstractCollection_0.call(this);
  $$init_270();
}

defineSeed(337, 333, makeCastMap([Q$Set]));
_.equals$ = function equals_8(o){
  var iter, other, otherItem;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, Q$Set)) {
    return false;
  }
  other = dynamicCast(o, Q$Set);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  for (iter = other.iterator(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this.contains_0(otherItem)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_11(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator(); iter.hasNext();) {
    next = iter.next_0();
    if (jsNotEquals(next, null)) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}
;
function $$init_271(){
}

function $contains_0(this$static, o){
  var entry, key, value_0;
  if (instanceOf(o, Q$Map$Entry)) {
    entry = dynamicCast(o, Q$Map$Entry);
    key = entry.getKey();
    if (this$static.this$0.containsKey(key)) {
      value_0 = this$static.this$0.get_2(key);
      return this$static.this$0.equals(entry.getValue(), value_0);
    }
  }
  return false;
}

function AbstractHashMap$EntrySet_0(this$0){
  this.this$0 = this$0;
  AbstractSet_0.call(this);
  $$init_271();
}

defineSeed(336, 337, makeCastMap([Q$Set]), AbstractHashMap$EntrySet_0);
_.clear_0 = function clear_3(){
  this.this$0.clear_0();
}
;
_.contains_0 = function contains_0(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_2(){
  return new AbstractHashMap$EntrySetIterator_0(this.this$0);
}
;
_.remove_2 = function remove_7(entry){
  var key;
  if ($contains_0(this, entry)) {
    key = dynamicCast(entry, Q$Map$Entry).getKey();
    this.this$0.remove_3(key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_3(){
  return this.this$0.size_1();
}
;
function $$init_272(this$static){
}

function $next_0(this$static){
  return this$static.last = dynamicCast(this$static.iter.next_0(), Q$Map$Entry);
}

function AbstractHashMap$EntrySetIterator_0(this$0){
  var list;
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_272(this);
  list = new ArrayList_0;
  this$0.nullSlotLive && list.add_1(new AbstractHashMap$MapEntryNull_0(this$0));
  $addAllStringEntries(this$0, list);
  $addAllHashEntries(this$0, list);
  this.iter = list.iterator();
}

defineSeed(338, 1, {}, AbstractHashMap$EntrySetIterator_0);
_.hasNext = function hasNext_0(){
  return this.iter.hasNext();
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_1 = function remove_8(){
  if (isNull(this.last)) {
    throw new IllegalStateException_1('Must call next() before remove().');
  }
   else {
    this.iter.remove_1();
    this.this$0.remove_3(this.last.getKey());
    this.last = null;
  }
}
;
_.last = null;
function $$init_273(){
}

function AbstractMapEntry_0(){
  Object_1.call(this);
  $$init_273();
}

defineSeed(340, 1, makeCastMap([Q$Map$Entry]));
_.equals$ = function equals_9(other){
  var entry;
  if (instanceOf(other, Q$Map$Entry)) {
    entry = dynamicCast(other, Q$Map$Entry);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}
;
_.hashCode$ = function hashCode_12(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  jsNotEquals(this.getKey(), null) && (keyHash = hashCode__devirtual$(this.getKey()));
  jsNotEquals(this.getValue(), null) && (valueHash = hashCode__devirtual$(this.getValue()));
  return keyHash ^ valueHash;
}
;
_.toString$ = function toString_19(){
  return this.getKey() + '=' + this.getValue();
}
;
function $$init_274(){
}

function AbstractHashMap$MapEntryNull_0(this$0){
  this.this$0 = this$0;
  AbstractMapEntry_0.call(this);
  $$init_274();
}

defineSeed(339, 340, makeCastMap([Q$Map$Entry]), AbstractHashMap$MapEntryNull_0);
_.getKey = function getKey(){
  return null;
}
;
_.getValue = function getValue(){
  return this.this$0.nullSlot;
}
;
_.setValue = function setValue(object){
  return $putNullSlot(this.this$0, object);
}
;
function $$init_275(){
}

function AbstractHashMap$MapEntryString_0(this$0, key){
  this.this$0 = this$0;
  AbstractMapEntry_0.call(this);
  $$init_275();
  this.key = key;
}

defineSeed(341, 340, makeCastMap([Q$Map$Entry]), AbstractHashMap$MapEntryString_0);
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue = function getValue_0(){
  return $getStringValue(this.this$0, this.key);
}
;
_.setValue = function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}
;
function $$init_276(this$static){
  this$static , 0;
}

function $iterator_0(this$static){
  return new AbstractList$IteratorImpl_0(this$static);
}

function $listIterator(this$static, from){
  return new AbstractList$ListIteratorImpl_0(this$static, from);
}

function AbstractList_0(){
  AbstractCollection_0.call(this);
  $$init_276(this);
}

function checkIndex(index_0, size_0){
  (index_0 < 0 || index_0 >= size_0) && indexOutOfBounds(index_0, size_0);
}

function indexOutOfBounds(index_0, size_0){
  throw new IndexOutOfBoundsException_1('Index: ' + index_0 + ', Size: ' + size_0);
}

defineSeed(342, 333, makeCastMap([Q$List]));
_.add_2 = function add_6(index_0, element){
  throw new UnsupportedOperationException_1('Add not supported on this list');
}
;
_.add_1 = function add_7(obj){
  this.add_2(this.size_1(), obj);
  return true;
}
;
_.clear_0 = function clear_4(){
  this.removeRange(0, this.size_1());
}
;
_.equals$ = function equals_10(o){
  var elem, elemOther, iter, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, Q$List)) {
    return false;
  }
  other = dynamicCast(o, Q$List);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iter = $iterator_0(this);
  iterOther = other.iterator();
  while (iter.hasNext()) {
    elem = iter.next_0();
    elemOther = iterOther.next_0();
    if (!(jsEquals(elem, null)?jsEquals(elemOther, null):equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_13(){
  var iter, k, obj;
  k = 1;
  31;
  iter = $iterator_0(this);
  while (iter.hasNext()) {
    obj = iter.next_0();
    k = 31 * k + (jsEquals(obj, null)?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}
;
_.iterator = function iterator_3(){
  return $iterator_0(this);
}
;
_.listIterator = function listIterator(){
  return $listIterator(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return $listIterator(this, from);
}
;
_.remove_4 = function remove_9(index_0){
  throw new UnsupportedOperationException_1('Remove not supported on this list');
}
;
_.removeRange = function removeRange(fromIndex, endIndex){
  var i, iter;
  iter = $listIterator(this, fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    iter.next_0();
    iter.remove_1();
  }
}
;
_.set_0 = function set_1(index_0, o){
  throw new UnsupportedOperationException_1('Set not supported on this list');
}
;
function $$init_277(this$static){
}

function $hasNext(this$static){
  return this$static.i < this$static.this$0_0.size_1();
}

function AbstractList$IteratorImpl_0(this$0){
  this.this$0_0 = this$0;
  Object_1.call(this);
  $$init_277(this);
}

defineSeed(343, 1, {}, AbstractList$IteratorImpl_0);
_.hasNext = function hasNext_1(){
  return $hasNext(this);
}
;
_.next_0 = function next_2(){
  if (!$hasNext(this)) {
    throw new NoSuchElementException_0;
  }
  return this.this$0_0.get_3(this.last = this.i++);
}
;
_.remove_1 = function remove_10(){
  if (this.last < 0) {
    throw new IllegalStateException_0;
  }
  this.this$0_0.remove_4(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
function $$init_278(){
}

function $hasPrevious(this$static){
  return this$static.i > 0;
}

function AbstractList$ListIteratorImpl_0(this$0, start_0){
  var size_0;
  this.this$0 = this$0;
  AbstractList$IteratorImpl_0.call(this, this$0);
  $$init_278();
  size_0 = this$0.size_1();
  (start_0 < 0 || start_0 > size_0) && indexOutOfBounds(start_0, size_0);
  this.i = start_0;
}

defineSeed(344, 343, {}, AbstractList$ListIteratorImpl_0);
_.hasPrevious = function hasPrevious(){
  return $hasPrevious(this);
}
;
_.previous = function previous_0(){
  if (!$hasPrevious(this)) {
    throw new NoSuchElementException_0;
  }
  return this.this$0.get_3(this.last = --this.i);
}
;
function $$init_279(){
}

function AbstractMap$1_0(this$0, val$entrySet){
  this.this$0 = this$0;
  this.val$entrySet = val$entrySet;
  AbstractSet_0.call(this);
  $$init_279();
}

defineSeed(345, 337, makeCastMap([Q$Set]), AbstractMap$1_0);
_.contains_0 = function contains_1(key){
  return this.this$0.containsKey(key);
}
;
_.iterator = function iterator_4(){
  var outerIter;
  outerIter = this.val$entrySet.iterator();
  return new AbstractMap$1$1_0(this, outerIter);
}
;
_.size_1 = function size_4(){
  return this.val$entrySet.size_1();
}
;
function $$init_280(){
}

function AbstractMap$1$1_0(this$1, val$outerIter){
  this , this$1;
  this.val$outerIter = val$outerIter;
  Object_1.call(this);
  $$init_280();
}

defineSeed(346, 1, {}, AbstractMap$1$1_0);
_.hasNext = function hasNext_2(){
  return this.val$outerIter.hasNext();
}
;
_.next_0 = function next_3(){
  var entry;
  entry = dynamicCast(this.val$outerIter.next_0(), Q$Map$Entry);
  return entry.getKey();
}
;
_.remove_1 = function remove_11(){
  this.val$outerIter.remove_1();
}
;
function $$init_281(){
}

function AbstractMap$2_0(this$0, val$entrySet){
  this.this$0 = this$0;
  this.val$entrySet = val$entrySet;
  AbstractCollection_0.call(this);
  $$init_281();
}

defineSeed(347, 333, {}, AbstractMap$2_0);
_.contains_0 = function contains_2(value_0){
  return this.this$0.containsValue(value_0);
}
;
_.iterator = function iterator_5(){
  var outerIter;
  outerIter = this.val$entrySet.iterator();
  return new AbstractMap$2$1_0(this, outerIter);
}
;
_.size_1 = function size_5(){
  return this.val$entrySet.size_1();
}
;
function $$init_282(){
}

function AbstractMap$2$1_0(this$1, val$outerIter){
  this , this$1;
  this.val$outerIter = val$outerIter;
  Object_1.call(this);
  $$init_282();
}

defineSeed(348, 1, {}, AbstractMap$2$1_0);
_.hasNext = function hasNext_3(){
  return this.val$outerIter.hasNext();
}
;
_.next_0 = function next_4(){
  var value_0;
  value_0 = dynamicCast(this.val$outerIter.next_0(), Q$Map$Entry).getValue();
  return value_0;
}
;
_.remove_1 = function remove_12(){
  this.val$outerIter.remove_1();
}
;
function $$init_283(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, 0, 0);
}

function $add_6(this$static, o){
  setCheck(this$static.array, this$static.size_0++, o);
  return true;
}

function $get_2(this$static, index_0){
  checkIndex(index_0, this$static.size_0);
  return this$static.array[index_0];
}

function $indexOf_3(this$static, o){
  return $indexOf_4(this$static, o, 0);
}

function $indexOf_4(this$static, o, index_0){
  for (; index_0 < this$static.size_0; ++index_0) {
    if (equalsWithNullCheck(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_2(this$static, index_0){
  var previous;
  previous = $get_2(this$static, index_0);
  splice_0(this$static.array, index_0, 1);
  --this$static.size_0;
  return previous;
}

function $toArray(this$static, out){
  var i;
  out.length < this$static.size_0 && (out = createFrom(out, this$static.size_0));
  for (i = 0; i < this$static.size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > this$static.size_0 && setCheck(out, this$static.size_0, null);
  return out;
}

function ArrayList_0(){
  AbstractList_0.call(this);
  $$init_283(this);
}

function ArrayList_1(initialCapacity){
  AbstractList_0.call(this);
  $$init_283(this);
  if (initialCapacity < 0) {
    debugger;
    throw makeAssertionError();
  }
  setCapacity(this.array, initialCapacity);
}

function ArrayList_2(c){
  AbstractList_0.call(this);
  $$init_283(this);
  spliceArray(this.array, 0, 0, c.toArray());
  this.size_0 = this.array.length;
}

function setCapacity(array, newSize){
  array.length = newSize;
}

function splice_0(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_1(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

function spliceArray(array, index_0, deleteCount, values){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(values));
}

defineSeed(349, 342, makeCastMap([Q$Serializable, Q$List]), ArrayList_0, ArrayList_1, ArrayList_2);
_.add_2 = function add_8(index_0, o){
  (index_0 < 0 || index_0 > this.size_0) && indexOutOfBounds(index_0, this.size_0);
  splice_1(this.array, index_0, 0, o);
  ++this.size_0;
}
;
_.add_1 = function add_9(o){
  return $add_6(this, o);
}
;
_.addAll = function addAll_0(c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  spliceArray(this.array, this.size_0, 0, cArray);
  this.size_0 += len;
  return true;
}
;
_.clear_0 = function clear_5(){
  this.array = initDim(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, 0, 0);
  this.size_0 = 0;
}
;
_.contains_0 = function contains_3(o){
  return $indexOf_3(this, o) != -1;
}
;
_.get_3 = function get_12(index_0){
  return $get_2(this, index_0);
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_0 == 0;
}
;
_.remove_4 = function remove_13(index_0){
  return $remove_2(this, index_0);
}
;
_.remove_2 = function remove_14(o){
  var i;
  i = $indexOf_3(this, o);
  if (i == -1) {
    return false;
  }
  $remove_2(this, i);
  return true;
}
;
_.removeRange = function removeRange_0(fromIndex, endIndex){
  var count;
  checkIndex(fromIndex, this.size_0 + 1);
  (endIndex < fromIndex || endIndex > this.size_0) && indexOutOfBounds(endIndex, this.size_0);
  count = endIndex - fromIndex;
  splice_0(this.array, fromIndex, count);
  this.size_0 -= count;
}
;
_.set_0 = function set_2(index_0, o){
  var previous;
  previous = $get_2(this, index_0);
  setCheck(this.array, index_0, o);
  return previous;
}
;
_.size_1 = function size_6(){
  return this.size_0;
}
;
_.toArray = function toArray_1(){
  return cloneSubrange(this.array, 0, this.size_0);
}
;
_.toArray_0 = function toArray_2(out){
  return $toArray(this, out);
}
;
_.size_0 = 0;
function $clinit_Collections(){
  $clinit_Collections = nullMethod;
  EMPTY_LIST = new Collections$EmptyList_0;
  new Collections$EmptyMap_0;
  EMPTY_SET = new Collections$EmptySet_0;
  new Collections$1_0;
}

function emptyList(){
  $clinit_Collections();
  return EMPTY_LIST;
}

function emptySet(){
  $clinit_Collections();
  return EMPTY_SET;
}

var EMPTY_LIST, EMPTY_SET;
function $$init_284(){
}

function Collections$1_0(){
  Object_1.call(this);
  $$init_284();
}

defineSeed(351, 1, {}, Collections$1_0);
function $$init_285(){
}

function Collections$EmptyList_0(){
  AbstractList_0.call(this);
  $$init_285();
}

defineSeed(352, 342, makeCastMap([Q$Serializable, Q$List]), Collections$EmptyList_0);
_.contains_0 = function contains_4(object){
  return false;
}
;
_.get_3 = function get_13(location_0){
  throw new IndexOutOfBoundsException_0;
}
;
_.size_1 = function size_7(){
  return 0;
}
;
function $$init_286(){
}

function Collections$EmptyMap_0(){
  AbstractMap_0.call(this);
  $$init_286();
}

defineSeed(353, 335, makeCastMap([Q$Serializable, Q$Map]), Collections$EmptyMap_0);
_.containsKey = function containsKey_1(key){
  return false;
}
;
_.containsValue = function containsValue_1(value_0){
  return false;
}
;
_.entrySet = function entrySet_1(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.get_2 = function get_14(key){
  return null;
}
;
_.keySet = function keySet_0(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.size_1 = function size_8(){
  return 0;
}
;
_.values = function values_13(){
  return $clinit_Collections() , EMPTY_LIST;
}
;
function $$init_287(){
}

function Collections$EmptySet_0(){
  AbstractSet_0.call(this);
  $$init_287();
}

defineSeed(354, 337, makeCastMap([Q$Serializable, Q$Set]), Collections$EmptySet_0);
_.contains_0 = function contains_5(object){
  return false;
}
;
_.iterator = function iterator_6(){
  return new Collections$EmptySet$1_0(this);
}
;
_.size_1 = function size_9(){
  return 0;
}
;
function $$init_288(){
}

function Collections$EmptySet$1_0(this$1){
  this , this$1;
  Object_1.call(this);
  $$init_288();
}

defineSeed(355, 1, {}, Collections$EmptySet$1_0);
_.hasNext = function hasNext_4(){
  return false;
}
;
_.next_0 = function next_5(){
  throw new NoSuchElementException_0;
}
;
_.remove_1 = function remove_15(){
  throw new UnsupportedOperationException_0;
}
;
function $$init_289(){
}

function HashMap_0(){
  AbstractHashMap_0.call(this);
  $$init_289();
}

defineSeed(356, 334, makeCastMap([Q$Serializable, Q$Map]), HashMap_0);
_.equals = function equals_11(value1, value2){
  return equalsWithNullCheck(value1, value2);
}
;
_.getHashCode = function getHashCode_1(key){
  return ~~hashCode__devirtual$(key);
}
;
function $$init_290(){
}

function HashSet_0(){
  AbstractSet_0.call(this);
  $$init_290();
  this.map_0 = new HashMap_0;
}

defineSeed(357, 337, makeCastMap([Q$Serializable, Q$Set]), HashSet_0);
_.add_1 = function add_10(o){
  var old;
  old = this.map_0.put(o, this);
  return jsEquals(old, null);
}
;
_.clear_0 = function clear_6(){
  this.map_0.clear_0();
}
;
_.contains_0 = function contains_6(o){
  return this.map_0.containsKey(o);
}
;
_.isEmpty = function isEmpty_2(){
  return $isEmpty_0(this.map_0);
}
;
_.iterator = function iterator_7(){
  return this.map_0.keySet().iterator();
}
;
_.remove_2 = function remove_16(o){
  return jsNotEquals(this.map_0.remove_3(o), null);
}
;
_.size_1 = function size_10(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_20(){
  return this.map_0.keySet().toString$();
}
;
function $$init_291(this$static){
  this$static.head = new LinkedHashMap$ChainEntry_0(this$static);
  this$static.map_0 = new HashMap_0;
  this$static.head.prev = this$static.head;
  this$static.head.next = this$static.head;
}

function $clear_0(this$static){
  this$static.map_0.clear_0();
  this$static.head.prev = this$static.head;
  this$static.head.next = this$static.head;
}

function $containsKey(this$static, key){
  return this$static.map_0.containsKey(key);
}

function $get_3(this$static, key){
  var entry;
  entry = dynamicCast(this$static.map_0.get_2(key), Q$LinkedHashMap$ChainEntry);
  if (isNotNull(entry)) {
    $recordAccess(this$static, entry);
    return $getValue_2(entry);
  }
  return null;
}

function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_3(entry);
    $addToEnd(entry);
  }
}

function $removeEldestEntry(){
  return false;
}

function LinkedHashMap_0(){
  HashMap_0.call(this);
  $$init_291(this);
}

defineSeed(358, 356, makeCastMap([Q$Serializable, Q$Map]), LinkedHashMap_0);
_.clear_0 = function clear_7(){
  $clear_0(this);
}
;
_.containsKey = function containsKey_2(key){
  return $containsKey(this, key);
}
;
_.containsValue = function containsValue_2(value_0){
  var node;
  node = this.head.next;
  while (jsNotEquals(node, this.head)) {
    if (equalsWithNullCheck($getValue_2(node), value_0)) {
      return true;
    }
    node = node.next;
  }
  return false;
}
;
_.entrySet = function entrySet_2(){
  return new LinkedHashMap$EntrySet_0(this);
}
;
_.get_2 = function get_15(key){
  return $get_3(this, key);
}
;
_.put = function put_1(key, value_0){
  var eldest, newEntry, old, oldValue;
  old = dynamicCast(this.map_0.get_2(key), Q$LinkedHashMap$ChainEntry);
  if (isNull(old)) {
    newEntry = new LinkedHashMap$ChainEntry_1(this, key, value_0);
    this.map_0.put(key, newEntry);
    $addToEnd(newEntry);
    eldest = this.head.next;
    if ($removeEldestEntry()) {
      $remove_3(eldest);
      this.map_0.remove_3($getKey(eldest));
    }
    return null;
  }
   else {
    oldValue = $getValue_2(old);
    $setValue(old, value_0);
    $recordAccess(this, old);
    return oldValue;
  }
}
;
_.remove_3 = function remove_17(key){
  var entry;
  entry = dynamicCast(this.map_0.remove_3(key), Q$LinkedHashMap$ChainEntry);
  if (isNotNull(entry)) {
    $remove_3(entry);
    return $getValue_2(entry);
  }
  return null;
}
;
_.size_1 = function size_11(){
  return this.map_0.size_1();
}
;
_.accessOrder = false;
function $$init_292(){
}

function $getKey(this$static){
  return this$static.key;
}

function $getValue_2(this$static){
  return this$static.value_0;
}

function $setValue(this$static, value_0){
  var old;
  old = $getValue_2(this$static);
  this$static.value_0 = value_0;
  return old;
}

function MapEntryImpl_0(key, value_0){
  AbstractMapEntry_0.call(this);
  $$init_292();
  this.key = key;
  this.value_0 = value_0;
}

defineSeed(360, 340, makeCastMap([Q$Map$Entry]), MapEntryImpl_0);
_.getKey = function getKey_1(){
  return $getKey(this);
}
;
_.getValue = function getValue_1(){
  return $getValue_2(this);
}
;
_.setValue = function setValue_1(value_0){
  return $setValue(this, value_0);
}
;
function $$init_293(){
}

function $addToEnd(this$static){
  var tail;
  tail = this$static.this$0.head.prev;
  if (!(isNotNull(this$static.this$0.head) && isNotNull(tail))) {
    debugger;
    throw makeAssertionError();
  }
  if (!(isNull(this$static.next) && isNull(this$static.prev))) {
    debugger;
    throw makeAssertionError();
  }
  this$static.prev = tail;
  this$static.next = this$static.this$0.head;
  tail.next = this$static.this$0.head.prev = this$static;
}

function $remove_3(this$static){
  this$static.next.prev = this$static.prev;
  this$static.prev.next = this$static.next;
  this$static.next = this$static.prev = null;
}

function LinkedHashMap$ChainEntry_0(this$0){
  LinkedHashMap$ChainEntry_1.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_1(this$0, key, value_0){
  this.this$0 = this$0;
  MapEntryImpl_0.call(this, key, value_0);
  $$init_293();
  this.next = this.prev = null;
}

defineSeed(359, 360, makeCastMap([Q$LinkedHashMap$ChainEntry, Q$Map$Entry]), LinkedHashMap$ChainEntry_0, LinkedHashMap$ChainEntry_1);
function $$init_294(){
}

function LinkedHashMap$EntrySet_0(this$0){
  this.this$0 = this$0;
  AbstractSet_0.call(this);
  $$init_294();
}

defineSeed(361, 337, makeCastMap([Q$Set]), LinkedHashMap$EntrySet_0);
_.clear_0 = function clear_8(){
  $clear_0(this.this$0);
}
;
_.contains_0 = function contains_7(o){
  var entry, key, value_0;
  if (!instanceOf(o, Q$Map$Entry)) {
    return false;
  }
  entry = dynamicCast(o, Q$Map$Entry);
  key = entry.getKey();
  if ($containsKey(this.this$0, key)) {
    value_0 = $get_3(this.this$0, key);
    return equalsWithNullCheck(entry.getValue(), value_0);
  }
  return false;
}
;
_.iterator = function iterator_8(){
  return new LinkedHashMap$EntrySet$EntryIterator_0(this);
}
;
_.size_1 = function size_12(){
  return this.this$0.map_0.size_1();
}
;
function $$init_295(){
}

function $next_1(this$static){
  if (jsEquals(this$static.next, this$static.this$1.this$0.head)) {
    throw new NoSuchElementException_0;
  }
  this$static.last = this$static.next;
  this$static.next = this$static.next.next;
  return this$static.last;
}

function LinkedHashMap$EntrySet$EntryIterator_0(this$1){
  this.this$1 = this$1;
  Object_1.call(this);
  $$init_295();
  this.next = this$1.this$0.head.next;
}

defineSeed(362, 1, {}, LinkedHashMap$EntrySet$EntryIterator_0);
_.hasNext = function hasNext_5(){
  return jsNotEquals(this.next, this.this$1.this$0.head);
}
;
_.next_0 = function next_6(){
  return $next_1(this);
}
;
_.remove_1 = function remove_18(){
  if (isNull(this.last)) {
    throw new IllegalStateException_1('No current entry');
  }
  $remove_3(this.last);
  this.this$1.this$0.map_0.remove_3($getKey(this.last));
  this.last = null;
}
;
function $$init_296(){
}

function NoSuchElementException_0(){
  RuntimeException_0.call(this);
  $$init_296();
}

function NoSuchElementException_1(s){
  RuntimeException_1.call(this, s);
  $$init_296();
}

defineSeed(363, 19, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), NoSuchElementException_0, NoSuchElementException_1);
function equalsWithNullCheck(a, b){
  return maskUndefined(a) === maskUndefined(b) || jsNotEquals(a, null) && equals__devirtual$(a, b);
}

function $clinit_Level(){
  $clinit_Level = nullMethod;
  new LevelImplNull_0;
  new Level$LevelAll_0;
  new Level$LevelConfig_0;
  FINE = new Level$LevelFine_0;
  new Level$LevelFiner_0;
  new Level$LevelFinest_0;
  new Level$LevelInfo_0;
  new Level$LevelOff_0;
  new Level$LevelSevere_0;
  new Level$LevelWarning_0;
}

function $$init_297(){
}

function Level_0(){
  Object_1.call(this);
  $$init_297();
}

defineSeed(365, 1, makeCastMap([Q$Serializable]));
_.getName = function getName(){
  return 'DUMMY';
}
;
_.toString$ = function toString_21(){
  return this.getName();
}
;
var FINE;
function $$init_298(){
}

function Level$LevelAll_0(){
  Level_0.call(this);
  $$init_298();
}

defineSeed(366, 365, makeCastMap([Q$Serializable]), Level$LevelAll_0);
_.getName = function getName_0(){
  return 'ALL';
}
;
function $$init_299(){
}

function Level$LevelConfig_0(){
  Level_0.call(this);
  $$init_299();
}

defineSeed(367, 365, makeCastMap([Q$Serializable]), Level$LevelConfig_0);
_.getName = function getName_1(){
  return 'CONFIG';
}
;
function $$init_300(){
}

function Level$LevelFine_0(){
  Level_0.call(this);
  $$init_300();
}

defineSeed(368, 365, makeCastMap([Q$Serializable]), Level$LevelFine_0);
_.getName = function getName_2(){
  return 'FINE';
}
;
function $$init_301(){
}

function Level$LevelFiner_0(){
  Level_0.call(this);
  $$init_301();
}

defineSeed(369, 365, makeCastMap([Q$Serializable]), Level$LevelFiner_0);
_.getName = function getName_3(){
  return 'FINER';
}
;
function $$init_302(){
}

function Level$LevelFinest_0(){
  Level_0.call(this);
  $$init_302();
}

defineSeed(370, 365, makeCastMap([Q$Serializable]), Level$LevelFinest_0);
_.getName = function getName_4(){
  return 'FINEST';
}
;
function $$init_303(){
}

function Level$LevelInfo_0(){
  Level_0.call(this);
  $$init_303();
}

defineSeed(371, 365, makeCastMap([Q$Serializable]), Level$LevelInfo_0);
_.getName = function getName_5(){
  return 'INFO';
}
;
function $$init_304(){
}

function Level$LevelOff_0(){
  Level_0.call(this);
  $$init_304();
}

defineSeed(372, 365, makeCastMap([Q$Serializable]), Level$LevelOff_0);
_.getName = function getName_6(){
  return 'OFF';
}
;
function $$init_305(){
}

function Level$LevelSevere_0(){
  Level_0.call(this);
  $$init_305();
}

defineSeed(373, 365, makeCastMap([Q$Serializable]), Level$LevelSevere_0);
_.getName = function getName_7(){
  return 'SEVERE';
}
;
function $$init_306(){
}

function Level$LevelWarning_0(){
  Level_0.call(this);
  $$init_306();
}

defineSeed(374, 365, makeCastMap([Q$Serializable]), Level$LevelWarning_0);
_.getName = function getName_8(){
  return 'WARNING';
}
;
var $entry = registerEntry();
function gwtOnLoad(errFn, modName, modBase, softPermutationId){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init_0)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init_0)();
  }
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object', 1, null), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler', 31, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$', 28, Ljava_lang_Object_2_classLit), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable', 21, Ljava_lang_Object_2_classLit), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception', 20, Ljava_lang_Throwable_2_classLit), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException', 19, Ljava_lang_Exception_2_classLit), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement', 327, Ljava_lang_Object_2_classLit), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;', 380, Ljava_lang_StackTraceElement_2_classLit), I_classLit = createForPrimitive('', 'int', ' I'), Lcom_google_gwt_lang_SeedUtil_2_classLit = createForClass('com.google.gwt.lang.', 'SeedUtil', 149, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_DocumentModeAsserter_2_classLit = createForClass('com.google.gwt.user.client.', 'DocumentModeAsserter', 168, Ljava_lang_Object_2_classLit), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum', 23, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit = createForEnum('com.google.gwt.user.client.', 'DocumentModeAsserter$Severity', 169, Ljava_lang_Enum_2_classLit, values_9, valueOf_9), _3Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit = createForArray('[Lcom.google.gwt.user.client.', 'DocumentModeAsserter$Severity;', 381, Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit), Lcom_google_gwt_useragent_client_UserAgentAsserter_2_classLit = createForClass('com.google.gwt.useragent.client.', 'UserAgentAsserter', 237, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_client_JWPlayerStateImpl_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.client.', 'JWPlayerStateImpl', 293, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_Gwtjwplayerwrapper_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.', 'Gwtjwplayerwrapper', 297, Ljava_lang_Object_2_classLit), Ljava_lang_Error_2_classLit = createForClass('java.lang.', 'Error', 313, Ljava_lang_Throwable_2_classLit), Ljava_lang_AssertionError_2_classLit = createForClass('java.lang.', 'AssertionError', 312, Ljava_lang_Error_2_classLit), Z_classLit = createForPrimitive('', 'boolean', ' Z'), Ljava_lang_Boolean_2_classLit = createForClass('java.lang.', 'Boolean', 314, Ljava_lang_Object_2_classLit), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number', 322, Ljava_lang_Object_2_classLit), C_classLit = createForPrimitive('', 'char', ' C'), _3C_classLit = createForArray('', '[C', 382, C_classLit), Ljava_lang_Character_2_classLit = createForClass('java.lang.', 'Character', null, Ljava_lang_Object_2_classLit), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class', 316, Ljava_lang_Object_2_classLit), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer', 321, Ljava_lang_Number_2_classLit), _3Ljava_lang_Integer_2_classLit = createForArray('[Ljava.lang.', 'Integer;', 383, Ljava_lang_Integer_2_classLit), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String', 2, Ljava_lang_Object_2_classLit), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;', 379, Ljava_lang_String_2_classLit), Ljava_lang_String$1_2_classLit = createForClass('java.lang.', 'String$1', 328, Ljava_lang_Object_2_classLit), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException', 317, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException', 27, Ljava_lang_RuntimeException_2_classLit), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder', 331, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_UnloadSupport_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'UnloadSupport', 47, Ljava_lang_Object_2_classLit), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException', 311, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client.', 'UserAgentImplSafari', 238, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_DocumentModeAsserter_1DocumentModeProperty_2_classLit = createForClass('com.google.gwt.user.client.', 'DocumentModeAsserter_DocumentModeProperty', 171, Ljava_lang_Object_2_classLit), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException', 325, Ljava_lang_RuntimeException_2_classLit), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException', 318, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImpl', 43, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjectorImpl_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.gin.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjectorImpl', 306, Ljava_lang_Object_2_classLit), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;', 378, Ljava_lang_Object_2_classLit), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection', 333, Ljava_lang_Object_2_classLit), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList', 342, Ljava_util_AbstractCollection_2_classLit), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList', 349, Ljava_util_AbstractList_2_classLit), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl', 343, Ljava_lang_Object_2_classLit), Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$ListIteratorImpl', 344, Ljava_util_AbstractList$IteratorImpl_2_classLit), Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$Collector', 40, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$CollectorMoz', 42, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit), Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$CollectorChrome', 41, Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2_classLit), Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImplAppend', 44, Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit), Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client.', 'Duration', 25, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl', 35, Lcom_google_gwt_core_client_Scheduler_2_classLit), Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$Flusher', 36, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$Rescuer', 37, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_shared_impl_JsLogger_2_classLit = createForClass('com.google.gwt.core.shared.impl.', 'JsLogger', 46, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_SuperDevModeLogger_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SuperDevModeLogger', 45, Lcom_google_gwt_core_shared_impl_JsLogger_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.gin.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector', 307, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 256, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_core_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 304, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_core_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$1_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1', 305, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_dispatch_client_actionhandler_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.dispatch.client.actionhandler.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 245, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 288, Ljava_lang_Object_2_classLit), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer', 330, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'HandlerContainerImpl', 248, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_PresenterWidget_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'PresenterWidget', 251, Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2_classLit), Lcom_gwtplatform_mvp_client_RootPresenter_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'RootPresenter', 253, Lcom_gwtplatform_mvp_client_PresenterWidget_2_classLit), Lcom_gwtplatform_mvp_client_ViewImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'ViewImpl', 255, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'RootPresenter$RootView', 254, Lcom_gwtplatform_mvp_client_ViewImpl_2_classLit), Lcom_gwtplatform_mvp_client_PresenterWidget$1_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'PresenterWidget$1', 252, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_HandlerContainerImpl$BindMonitor_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'HandlerContainerImpl$BindMonitor', 249, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_Presenter_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'Presenter', 250, Lcom_gwtplatform_mvp_client_PresenterWidget_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_core_MainPagePresenter_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.', 'MainPagePresenter', 298, Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_core_MainPagePresenter$1_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.', 'MainPagePresenter$1', 299, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_core_MainPagePresenter$2_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.', 'MainPagePresenter$2', 300, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_place_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.place.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 310, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'PlaceManagerImpl', 268, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_place_ClientPlaceManager_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.place.', 'ClientPlaceManager', 309, Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2_classLit), Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'PlaceManagerImpl$1', 269, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'PlaceManagerImpl$2', 270, Ljava_lang_Object_2_classLit), Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'Event', 107, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent', 106, Lcom_google_web_bindery_event_shared_Event_2_classLit), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent', 180, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager', 120, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers', 181, Lcom_google_gwt_event_shared_HandlerManager_2_classLit), Lcom_google_gwt_user_client_Window$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$1', 178, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_Window$2_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$2', 179, Ljava_lang_Object_2_classLit), Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'Event$Type', 110, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type', 109, Lcom_google_web_bindery_event_shared_Event$Type_2_classLit), Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'EventBus', 123, Ljava_lang_Object_2_classLit), Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus', 122, Lcom_google_web_bindery_event_shared_EventBus_2_classLit), Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$Bus', 121, Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit), Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$1', 239, Ljava_lang_Object_2_classLit), Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$2', 240, Ljava_lang_Object_2_classLit), Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$3', 241, Ljava_lang_Object_2_classLit), Lcom_google_web_bindery_event_shared_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 242, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_fr_1emmenemoi_1gwt_1widgets_1jwplayer_1example_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.gin.', 'fr_emmenemoi_gwt_widgets_jwplayer_example_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 308, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ProxyPlaceAbstract', 275, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ProxyPlaceImpl', 281, Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_core_MainPagePresenterMyProxyImpl_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.', 'MainPagePresenterMyProxyImpl', 301, Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceImpl_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ProxyImpl', 274, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_core_MainPagePresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.', 'MainPagePresenterMyProxyImpl$WrappedProxy', 302, Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ProxyPlaceAbstract$ProxyHandlerContainer', 280, Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ProxyPlaceAbstract$1', 276, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$2_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ProxyPlaceAbstract$2', 277, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'NotifyingAsyncCallback', 263, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ProxyPlaceAbstract$3', 278, Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ProxyPlaceAbstract$3$1', 279, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2_classLit = createForEnum('com.gwtplatform.mvp.client.proxy.', 'NotifyingAsyncCallback$State', 264, Ljava_lang_Enum_2_classLit, values_11, valueOf_11), _3Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2_classLit = createForArray('[Lcom.gwtplatform.mvp.client.proxy.', 'NotifyingAsyncCallback$State;', 384, Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2_classLit), Lcom_gwtplatform_dispatch_client_actionhandler_DefaultClientActionHandlerRegistry_2_classLit = createForClass('com.gwtplatform.dispatch.client.actionhandler.', 'DefaultClientActionHandlerRegistry', 244, Ljava_lang_Object_2_classLit), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException', 363, Ljava_lang_RuntimeException_2_classLit), Lcom_gwtplatform_mvp_client_AutobindDisable_2_classLit = createForClass('com.gwtplatform.mvp.client.', 'AutobindDisable', 246, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_example_client_core_MainPageView_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.', 'MainPageView', 303, Lcom_gwtplatform_mvp_client_ViewImpl_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ParameterTokenFormatter_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ParameterTokenFormatter', 266, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_PlaceImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'PlaceImpl', 267, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_PlaceRequest_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'PlaceRequest', 271, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_PlaceRequest$Builder_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'PlaceRequest$Builder', 272, Ljava_lang_Object_2_classLit), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException', 332, Ljava_lang_RuntimeException_2_classLit), Lcom_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'PlaceRequestInternalEvent', 273, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_gwtplatform_common_client_StandardProvider_2_classLit = createForClass('com.gwtplatform.common.client.', 'StandardProvider', 243, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_History$1_2_classLit = createForClass('com.google.gwt.user.client.', 'History$1', 176, Ljava_lang_Object_2_classLit), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException', 320, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImpl', 188, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_impl_HistoryImplTimer_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplTimer', 190, Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit), Lcom_google_gwt_user_client_impl_HistoryImplSafari_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplSafari', 189, Lcom_google_gwt_user_client_impl_HistoryImplTimer_2_classLit), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap', 335, Ljava_lang_Object_2_classLit), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap', 334, Ljava_util_AbstractMap_2_classLit), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap', 356, Ljava_util_AbstractHashMap_2_classLit), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet', 337, Ljava_util_AbstractCollection_2_classLit), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet', 336, Ljava_util_AbstractSet_2_classLit), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator', 338, Ljava_lang_Object_2_classLit), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry', 340, Ljava_lang_Object_2_classLit), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull', 339, Ljava_util_AbstractMapEntry_2_classLit), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString', 341, Ljava_util_AbstractMapEntry_2_classLit), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1', 345, Ljava_util_AbstractSet_2_classLit), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1', 346, Ljava_lang_Object_2_classLit), Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util.', 'AbstractMap$2', 347, Ljava_util_AbstractCollection_2_classLit), Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util.', 'AbstractMap$2$1', 348, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_ResetPresentersEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'ResetPresentersEvent', 282, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_gwtplatform_mvp_client_proxy_RevealRootContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'RevealRootContentEvent', 284, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'RevealRootLayoutContentEvent', 285, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'RevealRootPopupContentEvent', 286, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_gwtplatform_mvp_client_proxy_LockInteractionEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'LockInteractionEvent', 260, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ValueChangeEvent', 119, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared.', 'LegacyHandlerWrapper', 124, Ljava_lang_Object_2_classLit), Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'UmbrellaException', 126, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared.', 'UmbrellaException', 125, Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl', 360, Ljava_util_AbstractMapEntry_2_classLit), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet', 357, Ljava_util_AbstractSet_2_classLit), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException', 319, Ljava_lang_RuntimeException_2_classLit), Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util.', 'Collections$EmptyList', 352, Ljava_util_AbstractList_2_classLit), Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util.', 'Collections$EmptySet', 354, Ljava_util_AbstractSet_2_classLit), Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util.', 'Collections$EmptyMap', 353, Ljava_util_AbstractMap_2_classLit), Ljava_util_Collections$EmptySet$1_2_classLit = createForClass('java.util.', 'Collections$EmptySet$1', 355, Ljava_lang_Object_2_classLit), Ljava_util_Collections$1_2_classLit = createForClass('java.util.', 'Collections$1', 351, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_TokenFormatException_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'TokenFormatException', 287, Ljava_lang_RuntimeException_2_classLit), Lcom_gwtplatform_mvp_client_proxy_NavigationEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'NavigationEvent', 261, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_gwtplatform_mvp_client_proxy_NavigationRefusedEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'NavigationRefusedEvent', 262, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'WindowImpl', 191, Ljava_lang_Object_2_classLit), Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util.', 'LinkedHashMap', 358, Ljava_util_HashMap_2_classLit), Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util.', 'LinkedHashMap$ChainEntry', 359, Ljava_util_MapEntryImpl_2_classLit), Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util.', 'LinkedHashMap$EntrySet', 361, Ljava_util_AbstractSet_2_classLit), Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util.', 'LinkedHashMap$EntrySet$EntryIterator', 362, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent', 117, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit', 87, Ljava_lang_Enum_2_classLit, values_5, valueOf_5), _3Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Unit;', 385, Lcom_google_gwt_dom_client_Style$Unit_2_classLit), Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display', 63, Ljava_lang_Enum_2_classLit, values_1, valueOf_1), _3Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Display;', 386, Lcom_google_gwt_dom_client_Style$Display_2_classLit), Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow', 69, Ljava_lang_Enum_2_classLit, values_2, valueOf_2), _3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Overflow;', 387, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit), Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position', 75, Ljava_lang_Enum_2_classLit, values_3, valueOf_3), _3Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Position;', 388, Lcom_google_gwt_dom_client_Style$Position_2_classLit), Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign', 81, Ljava_lang_Enum_2_classLit, values_4, valueOf_4), _3Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$TextAlign;', 389, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit), Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Visibility', 98, Ljava_lang_Enum_2_classLit, values_6, valueOf_6), _3Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Visibility;', 390, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit), Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$1', 88, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$2', 89, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$3', 90, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$4', 91, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$5', 92, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$6', 93, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$7', 94, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$8', 95, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$9', 96, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$1', 64, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$2', 65, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$3', 66, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$4', 67, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$1', 70, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$2', 71, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$3', 72, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$4', 73, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$1', 76, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$2', 77, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$3', 78, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$4', 79, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign$1', 82, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign$2', 83, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign$3', 84, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TextAlign$4', 85, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Visibility$1', 99, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null, null), Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Visibility$2', 100, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null, null), Lcom_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'AsyncCallStartEvent', 257, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImpl', 53, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'AsyncCallSucceedEvent', 258, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplStandard', 54, Lcom_google_gwt_dom_client_DOMImpl_2_classLit), Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplStandardBase', 55, Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit), Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplWebkit', 56, Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject', 196, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget', 195, Lcom_google_gwt_user_client_ui_UIObject_2_classLit), Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusWidget', 202, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ButtonBase', 201, Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button', 200, Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit), Lcom_google_gwt_user_client_ui_UIObject$DebugIdImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject$DebugIdImpl', 224, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBoxBase', 222, Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit), Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase', 221, Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit), Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBox', 220, Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit), Lcom_google_gwt_user_client_ui_TextBoxBase$TextAlignConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase$TextAlignConstant', 223, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment', 225, Ljava_lang_Enum_2_classLit, values_10, valueOf_10), _3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment;', 391, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$1', 226, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$2', 227, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$3', 228, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$4', 229, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null, null), Lcom_google_gwt_i18n_client_AutoDirectionHandler_2_classLit = createForClass('com.google.gwt.i18n.client.', 'AutoDirectionHandler', 129, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client.', 'HasDirection$Direction', 133, Ljava_lang_Enum_2_classLit, values_7, valueOf_7), _3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForArray('[Lcom.google.gwt.i18n.client.', 'HasDirection$Direction;', 392, Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit), Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'LabelBase', 208, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label', 207, Lcom_google_gwt_user_client_ui_LabelBase_2_classLit), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$AutoHorizontalAlignmentConstant', 205, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant', 206, Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_client_JWPlayer_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.client.', 'JWPlayer', 289, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_client_JWPlayer$1_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.client.', 'JWPlayer$1', 290, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel', 194, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel', 193, Lcom_google_gwt_user_client_ui_Panel_2_classLit), Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLPanel', 204, Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit), Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException', 197, Lcom_google_gwt_event_shared_UmbrellaException_2_classLit), Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$1', 198, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$2', 199, Ljava_lang_Object_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_client_jwplayeroptions_JWPlayerOptions$JWPlayerPlaylistSource_2_classLit = createForInterface('fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.', 'JWPlayerOptions$JWPlayerPlaylistSource'), _3Lfr_emmenemoi_gwt_widgets_jwplayer_client_jwplayeroptions_JWPlayerOptions$JWPlayerPlaylistSource_2_classLit = createForArray('[Lfr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.', 'JWPlayerOptions$JWPlayerPlaylistSource;', 393, Lfr_emmenemoi_gwt_widgets_jwplayer_client_jwplayeroptions_JWPlayerOptions$JWPlayerPlaylistSource_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_client_jwplayeroptions_JWPlayerOptions_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.', 'JWPlayerOptions', 295, Ljava_lang_Object_2_classLit), Lcom_gwtplatform_mvp_client_proxy_RevealContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy.', 'RevealContentEvent', 283, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImpl', 233, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent', 105, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'HumanInputEvent', 104, Lcom_google_gwt_event_dom_client_DomEvent_2_classLit), Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseEvent', 103, Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit), Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ClickEvent', 102, Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type', 108, Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit), Lcom_google_gwt_user_client_ui_impl_TextBoxImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'TextBoxImpl', 236, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_shared_DirectionEstimator_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'DirectionEstimator', 141, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'LocaleInfo', 135, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DirectionalTextHelper', 203, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('com.google.gwt.core.client.', 'ScriptInjector$FromUrl', 33, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection', 231, Ljava_lang_Object_2_classLit), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;', 394, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator', 232, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImplStandard', 235, Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit), Lcom_google_gwt_user_client_ui_impl_FocusImplSafari_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImplSafari', 234, Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit), Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared.', 'AbstractRenderer', 164, Ljava_lang_Object_2_classLit), Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughRenderer', 166, Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit), Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughParser', 165, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'DOMImpl', 182, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_impl_DOMImpl$1_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'DOMImpl$1', 183, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'DOMImplStandard', 184, Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit), Lcom_google_gwt_user_client_impl_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'DOMImplStandardBase', 185, Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit), Lcom_google_gwt_user_client_impl_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'DOMImplWebkit', 186, Lcom_google_gwt_user_client_impl_DOMImplStandardBase_2_classLit), Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'LocaleInfoImpl', 137, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1shared_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'LocaleInfoImpl_shared', 139, Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2_classLit), Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'LocaleInfoImpl_', 138, Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1shared_2_classLit), Lcom_google_gwt_i18n_client_impl_CldrImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'CldrImpl', 136, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_shared_WordCountDirectionEstimator_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'WordCountDirectionEstimator', 142, Lcom_google_gwt_i18n_shared_DirectionEstimator_2_classLit), Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging.', 'Logger', 161, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel', 192, Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel', 215, Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel', 219, Lcom_google_gwt_user_client_ui_RootPanel_2_classLit), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1', 216, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$2', 217, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_RootPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$3', 218, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap', 114, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_BidiPolicy$BidiPolicyImpl_2_classLit = createForClass('com.google.gwt.i18n.client.', 'BidiPolicy$BidiPolicyImpl', 131, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_shared_BidiUtils_2_classLit = createForClass('com.google.gwt.i18n.shared.', 'BidiUtils', 140, Ljava_lang_Object_2_classLit), Lcom_google_gwt_logging_impl_LoggerImplNull_2_classLit = createForClass('com.google.gwt.logging.impl.', 'LoggerImplNull', 159, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_CodeDownloadException_2_classLit = createForClass('com.google.gwt.core.client.', 'CodeDownloadException', 18, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit = createForEnum('com.google.gwt.core.client.', 'CodeDownloadException$Reason', 22, Ljava_lang_Enum_2_classLit, values_0, valueOf_0), _3Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit = createForArray('[Lcom.google.gwt.core.client.', 'CodeDownloadException$Reason;', 395, Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit), Lcom_google_gwt_logging_impl_LoggerWithExposedConstructor_2_classLit = createForClass('com.google.gwt.logging.impl.', 'LoggerWithExposedConstructor', 160, Ljava_util_logging_Logger_2_classLit), Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'AttachEvent', 116, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_client_jwplayeroptions_JWPlayerPlaylistSourceImpl_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.', 'JWPlayerPlaylistSourceImpl', 296, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyEvent', 112, Lcom_google_gwt_event_dom_client_DomEvent_2_classLit), Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyCodeEvent', 111, Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit), Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyUpEvent', 113, Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit), Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging.', 'Level', 365, Ljava_lang_Object_2_classLit), Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging.', 'Level$LevelAll', 366, Ljava_util_logging_Level_2_classLit), Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging.', 'Level$LevelConfig', 367, Ljava_util_logging_Level_2_classLit), Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging.', 'Level$LevelFine', 368, Ljava_util_logging_Level_2_classLit), Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging.', 'Level$LevelFiner', 369, Ljava_util_logging_Level_2_classLit), Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging.', 'Level$LevelFinest', 370, Ljava_util_logging_Level_2_classLit), Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging.', 'Level$LevelInfo', 371, Ljava_util_logging_Level_2_classLit), Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging.', 'Level$LevelOff', 372, Ljava_util_logging_Level_2_classLit), Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging.', 'Level$LevelSevere', 373, Ljava_util_logging_Level_2_classLit), Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging.', 'Level$LevelWarning', 374, Ljava_util_logging_Level_2_classLit), Lfr_emmenemoi_gwt_widgets_jwplayer_client_JWPlayerEvent_2_classLit = createForClass('fr.emmenemoi.gwt.widgets.jwplayer.client.', 'JWPlayerEvent', 291, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'LayoutPanel', 211, Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit), Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootLayoutPanel', 213, Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit), Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootLayoutPanel$1', 214, Ljava_lang_Object_2_classLit), Lcom_google_gwt_logging_impl_LevelImplNull_2_classLit = createForClass('com.google.gwt.logging.impl.', 'LevelImplNull', 158, Ljava_lang_Object_2_classLit), Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client.', 'Layout', 152, Ljava_lang_Object_2_classLit), Lcom_google_gwt_layout_client_Layout$Alignment_2_classLit = createForEnum('com.google.gwt.layout.client.', 'Layout$Alignment', 154, Ljava_lang_Enum_2_classLit, values_8, valueOf_8), _3Lcom_google_gwt_layout_client_Layout$Alignment_2_classLit = createForArray('[Lcom.google.gwt.layout.client.', 'Layout$Alignment;', 396, Lcom_google_gwt_layout_client_Layout$Alignment_2_classLit), Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client.', 'Layout$Layer', 156, Ljava_lang_Object_2_classLit), Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation', 3, Ljava_lang_Object_2_classLit), Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client.', 'Layout$1', 153, Lcom_google_gwt_animation_client_Animation_2_classLit), Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation$1', 4, Ljava_lang_Object_2_classLit), Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationScheduler', 5, Ljava_lang_Object_2_classLit), Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationScheduler$AnimationHandle', 6, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'LayoutCommand', 209, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_LayoutCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'LayoutCommand$1', 210, Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ResizeEvent', 118, Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client.', 'LayoutImpl', 157, Ljava_lang_Object_2_classLit), _3Ljava_lang_Boolean_2_classLit = createForArray('[Ljava.lang.', 'Boolean;', 397, Ljava_lang_Boolean_2_classLit), Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client.', 'Attribute', 15, Ljava_lang_Object_2_classLit), Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client.', 'PrimitiveValueAttribute', 16, Lcom_google_gwt_aria_client_Attribute_2_classLit), Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client.', 'AriaValueAttribute', 14, Lcom_google_gwt_aria_client_Attribute_2_classLit), Lcom_google_gwt_animation_client_AnimationSchedulerImpl_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImpl', 7, Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit), Lcom_google_gwt_animation_client_AnimationSchedulerImplWebkit_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplWebkit', 12, Lcom_google_gwt_animation_client_AnimationSchedulerImpl_2_classLit), Lcom_google_gwt_animation_client_AnimationSchedulerImplWebkit$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplWebkit$AnimationHandleImpl', 13, Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit), Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplTimer', 8, Lcom_google_gwt_animation_client_AnimationSchedulerImpl_2_classLit), Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$AnimationHandleImpl', 11, Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit), _3Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForArray('[Lcom.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$AnimationHandleImpl;', 398, Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer', 10, Ljava_lang_Object_2_classLit), Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$1', 9, Lcom_google_gwt_user_client_Timer_2_classLit);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
//# sourceMappingURL=http://localhost:9876/sourcemaps/gwtjwplayerwrapper/gwtSourceMap.json 
//# sourceURL=gwtjwplayerwrapper-0.js

