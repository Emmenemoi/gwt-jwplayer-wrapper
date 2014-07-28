package fr.emmenemoi.gwt.widgets.jwplayer.client;

import java.util.ArrayList;

import com.google.gwt.core.client.Callback;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayString;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;

public class JWPlayer extends Widget {
	
	private JWPlayerOptions options;

	private static int count = 0;
	
	private final static String divPrefix = "jwplayerDivID_";
	private final String playerDivId;
	
	private final static String idPrefix = "jwplayerID_";	
	private final String playerId;
	
	private boolean playerLoaded = false;
	private static boolean scriptLoaded = false;
	private static ArrayList<JWPlayer> _waitingPlayers = new ArrayList<JWPlayer>();
	private JavaScriptObject jwplayer;

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
		return (options.playlist != null && options.playlist.length > 0 ) || (options.file != null && options.file != "") ;
	}
	
	protected void onLoad() {
	    if (scriptLoaded) {
	    	initPlayer();
	    } else {
	    	_waitingPlayers.add(this);
	    }
	    super.onLoad();
	}
	
	private void initPlayer(){
		if (!playerLoaded) {
			setVisible(false);
  	
	    	if ( hasSomethingToPlay() ) {
	    		initEmptyInnerDiv();
		    	onBeforePlayerLoaded();
	    		setVisible(true);
	    		loadPlayer(playerId);
		    	playerLoaded = true;
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

	protected void onUnload() {
		// GWT.log("onUnload", null);
		Element firstChild = DOM.getFirstChild(getElement());
		if (firstChild != null) {
			getElement().removeChild(DOM.getFirstChild(getElement()));
		}
		playerLoaded = false;
		super.onUnload();
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
	public void loadURL(String url) {
		if (playerLoaded) {
			_loadURL(url);
			setVisible(true);
		} else {
			options.file = url;
			if (scriptLoaded)
				initPlayer();
		}
	}
	
	public void stop() {
		if (playerLoaded) {
			_stop();
		} else {
			options.file = null;
		}
	}
	
	public void pause() {
		if (playerLoaded) {
			_pause();
		}
	}
	
	public void setHeight(int height) {
		//height = height.trim().toLowerCase();
		super.setHeight(String.valueOf(height)); // Width validation
		GWT.log(getHeight() + " =? " + height, null);

		//if (getHeight().equals(height)) {
			// throw new RuntimeException("CSS widths should not be negative");
			options.height = height;
			if (playerLoaded) {
				_applySize();
			}
		//}
	}

	public void setWidth(int width) {
		//width = width.trim().toLowerCase();
		super.setWidth(String.valueOf(width)); // Width validation
		GWT.log(getWidth() + " =? " + width, null);

		//if (getWidth().equals(width)) {
			// throw new RuntimeException("CSS widths should not be negative");
			options.width = width;
			if (playerLoaded) {
				_applySize();
			}
		//}
	}

	public int getWidth() {
		if (playerLoaded) {
			options.width = _getWidth();
		}
		return options.width;
	}

	public int getHeight() {
		if (playerLoaded) {
			options.height = _getHeight();
		}
		return options.height;
	}
	
	/*************** EVENTS WRAPPER *******************/
	public void onPause(JWPlayerState state) {
		GWT.log("JWPlayer Pause from "+ state, null);
	}
	
	public void onIdle(JWPlayerState state) {
		GWT.log("JWPlayer Idle from "+ state, null);
	}
	
	public void onBuffer(JWPlayerState state) {
		GWT.log("JWPlayer buffer from "+ state, null);
	}
	
	public void onError(String message) {
		GWT.log("JWPlayer Error from "+ message, null);
	}
	
	public void onReady() {
		GWT.log("JWPlayer Ready", null);
	}
	
	public void onComplete() {
		GWT.log("JWPlayer complete", null);
	}
	
	public void onMetadata(JsArrayString meta) {
		GWT.log("JWPlayer Metadata from "+ meta, null);
	}
	
	public void onPlayerMediaMeta(JWPlayerMediaMeta meta) {
		GWT.log("JWPlayer PlayerMediaMeta from "+ meta, null);
	}

	/**************** NATIVE WRAPPER *******************/
	
	private native void loadPlayer(String id) /*-{
		var jwplayerGWT = this;
		var options = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::options.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::toJS()();
		options.events = {
	        onPause: function(state) { 
	        	debugger;
	        	jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::onPause(Lfr/emmenemoi/gwt/widgets/jwplayer/client/JWPlayerState;)(state);
	        },
	        onError: function(message) { 
	        	debugger;
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
		var player = jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer = $wnd.jwplayer(id).setup(options);
		
		// autoplay
		if (jwplayerGWT.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::hasSomethingToPlay()() ) {
			player.play();
		}
	}-*/;

	private native String getAccountKey() /*-{
		return $wnd.jwplayer.key;
	}-*/;

	private native String getCloudSrc() /*-{
		return "http://jwpsrv.com/library/" + @fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::cloudKey + ".js";
	}-*/;
	
	private native void _loadURL(String url) /*-{
		
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.load([url]);
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.play(true);
	}-*/;
	private native void _stop() /*-{
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.stop();
	}-*/;
	private native void _pause() /*-{
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.pause(true);
	}-*/;
	private native void play() /*-{
	
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.play(true);
	}-*/;
	
	private native void _applySize() /*-{
		var options = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::options.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::toJS()();
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.resize(options.width, options.height);
	}-*/;
	
	private native int _getWidth() /*-{
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.getWidth();
	}-*/;

	private native int _getHeight() /*-{
		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayer::jwplayer.getHeight();
	}-*/;
}
