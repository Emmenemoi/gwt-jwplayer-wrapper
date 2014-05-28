package fr.emmenemoi.gwt.widgets.jwplayer.client;

import com.google.gwt.core.client.JavaScriptObject;

public class JWPlayerOptions {
	private static final JWPlayerOptions DEFAULT_OPTIONS = new JWPlayerOptions();

	private static final int DEFAULT_WIDTH = 320;
	private static final int DEFAULT_HEIGHT = 240;
	private static final String DEFAULT_FALLBACK = "NO Flash!!";
	
	public int width = DEFAULT_WIDTH;
	public int height = DEFAULT_HEIGHT;
	public String file;
	public String[] playlist;
	public String playlistFile = "";
	public String fallbackContent = DEFAULT_FALLBACK;
	public boolean fallback = true;
	public String primary = "flash";
	
	protected JWPlayerOptions(){}
	
	public static native JWPlayerOptions fromJson(String jsonString) /*-{
	    return eval('(' + jsonString + ')');
	}-*/;
	
	public native JavaScriptObject toJS() /*-{
				
	    var jsArray = {	width:			this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::width,
	    				height:			this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::height,
	    				primary:		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::primary,
	    				fallbackContent:this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::fallbackContent,
	    				fallback: 		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::fallback
	    				};  
	     if (this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::playlist != null) {
	     	jsArray.playlist = {file:this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::playlist};
	     } else {
	     	jsArray.file = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.JWPlayerOptions::file ;
	     }
	     
         return jsArray;
	}-*/;
}
