package fr.emmenemoi.gwt.widgets.jwplayer.client;

import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.gwt.core.client.Callback;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.core.client.JsArrayString;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.dom.client.Element;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.regexp.shared.MatchResult;
import com.google.gwt.regexp.shared.RegExp;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;

import fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerEvent.JWPlayerEventHandler;
import fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerInfos.State;
import fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions;
import fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions.JWPlayerPlaylistSource;
import fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerPlaylistSourceJso;

public class JWPlayer extends Widget implements HasJWPlayerEventHandlers {
	
	private Logger logger = Logger.getLogger(JWPlayer.class.getName());
	
	private JWPlayerOptions options;

	private static int count = 0;
	
	private final static String divPrefix = "jwplayerDivID_";
	private final String playerDivId;
	
	private final static String idPrefix = "jwplayerID_";	
	private final static RegExp sizeRegExp = RegExp.compile("([%0-9]+)");
	
	private boolean playerLoaded = false;
	private static boolean scriptLoaded = false;
	private static ArrayList<JWPlayer> _waitingPlayers = new ArrayList<JWPlayer>();

	public JavaScriptObject jwplayer;
	public final String playerId;

	public static String cloudKey = "4+R8PsscEeO69iIACooLPQ"; // JWPlayer inc. key
	
	public JWPlayer() {
		this(new JWPlayerOptions());
	}
	
	
	public JWPlayer(JWPlayerOptions options) {
		this.options=options;
		// if first player: add JWPlayer source
		if(count==0 && !scriptLoaded){ 
		    ScriptInjector.fromUrl( this.getCloudSrc() )
		    .setCallback(
	    	     new Callback<Void, Exception>() {
	    	        public void onFailure(Exception reason) {
	    	          Window.alert("JWPlayer Cloudhosted script load failed.");
	    	        }
	    	        public void onSuccess(Void result) {
	    	        	JWPlayer.scriptLoaded = true;
	    	        	JWPlayer.initPlayers();
	    	        }
	    	     }
	    	 )
	    	 .setWindow(ScriptInjector.TOP_WINDOW)
	    	 .inject();
		}
		
		playerId = idPrefix + count;
		playerDivId = divPrefix + count;
	    ++count;
	    Element element = DOM.createElement("div");
	    DOM.setElementProperty(element, "id", playerDivId);

	    // add new div which will be replaced by SWFObject
	    setElement(element);
	}
	
	private void initEmptyInnerDiv() {
		String notifyText = options.fallbackContent; /*
	        .replaceAll("\\$\\{flashPlayer.version\\}",
	            getSwfSettings().getMinPlayerVersion().toString());*/
	    getElement().setInnerHTML(
	        "<div id=\"" + playerId + "\">" + notifyText + "</div>");
	}

	private boolean hasSomethingToPlay() {
		return (options.playlist != null && !options.playlist.isEmpty() ) || (options.file != null && options.file != "") ;
	}
	
	private boolean isReady() {
		return playerLoaded && _getState() != null;
	}
	
	protected void onLoad() {
	    if (scriptLoaded) {
	    	initPlayer();
	    } else {
	    	_waitingPlayers.add(this);
	    }
	    super.onLoad();
	}
	
	protected void onUnload() {
		// GWT.log("onUnload", null);
		/*Element firstChild = DOM.getFirstChild(getElement());
		if (firstChild != null) {
			getElement().removeChild(DOM.getFirstChild(getElement()));
		}*/
		_remove();
		playerLoaded = false;
		super.onUnload();
	}
	
	private void initPlayer(){
		if (!playerLoaded) {
			setVisible(false);
  	
	    	if ( hasSomethingToPlay() ) {
	    		initEmptyInnerDiv();
		    	onBeforePlayerLoaded();
	    		setVisible(true);
	    		loadPlayer(playerId);
		    	onAfterPlayerLoaded();
	    	}
	    	
		}
	}
	
	public static void initPlayers(){
		for (JWPlayer p : _waitingPlayers) {
			p.initPlayer();
		}
	}
	
	/**
	 * Override this method to catch information about loaded player. The default
	 * implementation does nothing and need not be called by subclasses.
	 */
	protected void onAfterPlayerLoaded() {

	}

	/**
	 * Override this method to catch information about loaded player. The default
	 * implementation does nothing and need not be called by subclasses.
	 */
	protected void onBeforePlayerLoaded() {

	}

	/*
	public void loadPlaylist(String[] playlist) {
		if (playerLoaded) {
			_loadURL(playlist[0]);
			setVisible(true);
		} else {
			options.playlist = playlist;
			if (scriptLoaded)
				initPlayer();
		}
	}
*/
	/* OLD direct 
	public void loadURL(String url) {
		options.file = url;
		if ( playerLoaded ) {
			//_loadURL(url);
			loadPlayer(playerId);
			setVisible(true);
		} else if (scriptLoaded) {
			initPlayer();
		}
	}
	*/
	
	public void loadURL(String url) {
		options.file = url;
		if ( playerLoaded ) {
			//_loadURL(url);
			loadPlayer(playerId);
			setVisible(true);
		} else if (scriptLoaded) {
			initPlayer();
		}
	}
	
	public void loadSources(ArrayList<JWPlayerPlaylistSource> sources) {
		options.playlist= null;// = sources;
		if ( playerLoaded ) {
			//_loadURL(url);
			loadPlayer(playerId);
			setVisible(true);
		} else if (scriptLoaded) {
			initPlayer();
		}
	}
	
	
	public void stop() {
		if (playerLoaded) {
			_stop();
		}
		options.file = null;
	}
	
	public void pause() {
		if (playerLoaded) {
			_pause();
		}
	}
	
	public void play() {
		if (playerLoaded) {
			_play();
		}
	}
	
	public String currentURL() {
		return this.options.file;
	}
	
	public void setHeight(String height) {
		//height = height.trim().toLowerCase();
		super.setHeight(String.valueOf(height)); // Width validation

		MatchResult matcher = sizeRegExp.exec(height);
		if (matcher != null) {
			options.height = matcher.getGroup(0);
			if (playerLoaded) {
				_applySize();
			}
		}
	}

	public void setWidth(String width) {
		//width = width.trim().toLowerCase();
		super.setWidth(String.valueOf(width)); // Width validation
		
		MatchResult matcher = sizeRegExp.exec(width);
		if (matcher != null) {
			options.width = matcher.getGroup(0);
			if (playerLoaded) {
				_applySize();
			}
		}
	}

	public String getWidth() {
		if (playerLoaded) {
			options.width = _getWidth();
		}
		return options.width;
	}

	public String getHeight() {
		if (playerLoaded) {
			options.height = _getHeight();
		}
		return options.height;
	}
	
	/*************** EVENTS WRAPPER *******************/
	public void onPause(JWPlayerState state) {
		logger.log(Level.FINE , "JWPlayer Pause from "+ state.getOldState());
		fireEvent(new JWPlayerEvent(state));
	}
	
	public void onIdle(JWPlayerState state) {
		logger.log(Level.FINE , "JWPlayer Idle from "+ state.getOldState());
		fireEvent(new JWPlayerEvent(state));
	}
	
	public void onBuffer(JWPlayerState state) {
		logger.log(Level.FINE , "JWPlayer Buffer from "+ state.getOldState());
		fireEvent(new JWPlayerEvent(state));
	}
	
	public void onError(String message) {
		logger.log(Level.FINE , "JWPlayer Error from "+ message.toString());
	}
	
	public void onReady() {
		logger.log(Level.FINE , "JWPlayer Ready to play : " + options.file);
		playerLoaded = true;
		/*if (options.file != null) {
			//loadURL(options.file);
			_play();
		}*/
	}
	
	public void onComplete() {
		logger.log(Level.FINE , "JWPlayer complete");
	}
	
	public void onMetadata(JsArrayString meta) {
		logger.log(Level.FINE , "JWPlayer Metadata from "+ meta);
	}
	
	public void onPlayerMediaMeta(JWPlayerMediaMeta meta) {
		logger.log(Level.FINE , "JWPlayer PlayerMediaMeta : { bandwidth: "+meta.getBandwidth()+" , currentLevel: "+meta.getCurrentLevel()+", droppedFrames: "+meta.getDroppedFrames()+", width:"+meta.getMediaWidth()+" }" );
		fireEvent(new JWPlayerEvent(new JWPlayerStateImpl("PLAYING","PLAYING"), meta));
	}

	/**************** NATIVE WRAPPER *******************/
	
	public native JavaScriptObject player() /*-{
		var id = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::playerId;
		return $wnd.jwplayer(id);
	}-*/;
	
	private native void loadPlayer(String id) /*-{
		var jwplayerGWT = this;
		var options = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::options.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::toJS()();
		options.events = {
	        onPause: function(state) { 
	        	jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::onPause(Lfr/emmenemoi/gwt/widgets/jwplayer/client/JWPlayerState;)(state);
	        },
	        onError: function(message) { 
	        	jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::onError(Ljava/lang/String;)(message);
	        },
	        onIdle: function(state) { 
	        	jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::onIdle(Lfr/emmenemoi/gwt/widgets/jwplayer/client/JWPlayerState;)(state);
	        },
	        onReady: function() { 
	        	jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::onReady()();
	        },
	        onBuffer: function(state) { 
	        	jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::onBuffer(Lfr/emmenemoi/gwt/widgets/jwplayer/client/JWPlayerState;)(state);
	        },	        
	        onComplete: function() { 
	        	jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::onComplete()();
	        },
	        
	        onMeta: function(event) { 
	        	if (event.type == "jwplayerMediaMeta") {
	        		jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::onPlayerMediaMeta(Lfr/emmenemoi/gwt/widgets/jwplayer/client/JWPlayerMediaMeta;)(event.metadata);
	        	} else if ( (event.metadata.type != null && event.metadata.type == 'metadata') || event.metadata.bandwidth != null ) {
	        		jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::onMetadata(Lcom/google/gwt/core/client/JsArrayString;)(event.metadata);
				}
	        }
	    };
	    	    
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer = $wnd.jwplayer(id).setup(options);
		
		// autoplay
		if (this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::hasSomethingToPlay()() ) {
			$wnd.jwplayer(id).play(true);
		}
	}-*/;

	private native String getAccountKey() /*-{
		return $wnd.jwplayer.key;
	}-*/;

	private native String getCloudSrc() /*-{
		return "http://jwpsrv.com/library/" + @fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::cloudKey + ".js";
	}-*/;

	private native void _loadSources(JsArray<JWPlayerPlaylistSourceJso> plsources) /*-{
		//console.log('=loading=>'+url+'<='); 
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.load([{sources: plsources}]);
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.play(true);
		//var pl = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.getPlaylist();
		//console.log('=direct=>');
		//console.log(pl[0]);
		//console.log(this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer);
	}-*/;
	private native void _loadURL(String url) /*-{
		//console.log('=loading=>'+url+'<='); 
		var source = ""+url;
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.load([{file: source}]);
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.play(true);
		//var pl = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.getPlaylist();
		//console.log('=direct=>');
		//console.log(pl[0]);
		//console.log(this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer);
	}-*/;
	private native void _stop() /*-{
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.stop();
	}-*/;
	private native void _pause() /*-{
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.pause(true);
	}-*/;
	private native void _play() /*-{
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.play(true);
	}-*/;
	
	/*
	 * Being the reverse of the setup() call, this call will remove a JW Player from the page. 
	 * It ensures the player stops playback, the DOM is re-set to its original state and all 
	 * event listeners and timers are cleaned up.
	 * 
	 */
	private native void _remove() /*-{
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.remove();
	}-*/;
	private native void _applySize() /*-{
		var options = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::options.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::toJS()();
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.resize(options.width, options.height);
	}-*/;
	
	private native String _getWidth() /*-{
		return this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.getWidth();
	}-*/;

	private native String _getHeight() /*-{
		return this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.getHeight();
	}-*/;

	private native String _getState() /*-{
		return this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.getState();
	}-*/;
	
	@Override
	public HandlerRegistration addJWPlayerEventHandler(
			JWPlayerEventHandler handler) {
		return this.addHandler(handler, JWPlayerEvent.TYPE);	}
}
