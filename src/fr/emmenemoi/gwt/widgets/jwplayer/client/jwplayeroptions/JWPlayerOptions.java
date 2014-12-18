package fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions;

import java.util.ArrayList;

import com.google.gwt.core.client.JavaScriptObject;

public class JWPlayerOptions {
	private static final JWPlayerOptions DEFAULT_OPTIONS = new JWPlayerOptions();

	private static final String DEFAULT_WIDTH = "320";
	private static final String DEFAULT_HEIGHT = "240";
	private static final String DEFAULT_FALLBACK = "NO Flash!!";
	private static final double DEFAULT_BUFFERLENGTH = 0;	
	
	public String width = DEFAULT_WIDTH;
	public String height = DEFAULT_HEIGHT;
	public double bufferlength = DEFAULT_BUFFERLENGTH;
	public String file;
	public ArrayList<JWPlayerPlaylistSource> playlist;
	public ArrayList<JWPlayerPlaylistSource> sources;
	public String playlistFile = "";
	public String fallbackContent = DEFAULT_FALLBACK;
	public boolean fallback = true;
	public String primary = "flash";
	public boolean autostart = true;
	
	public JWPlayerOptions(){}
	
	public static native JWPlayerOptions fromJson(String jsonString) /*-{
	    return eval('(' + jsonString + ')');
	}-*/;
	
	public native JavaScriptObject toJS() /*-{
		
	     var jsArray = {	width:			this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::width,
	    				height:			this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::height,
	    				primary:		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::primary,
	    				fallbackContent:this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::fallbackContent,
	    				fallback: 		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::fallback,
	    				autostart: 		this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::autostart,
	    				bufferlength: 	this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::bufferlength,
	    				rtmp:	{
	    					bufferlength: this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::bufferlength
	    					}
	    				};  	    				
	   	 var playlist = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::playlist;
	   	 var sources = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::sources;
	     if ( typeof playlist != 'undefined' && !playlist.@java.util.ArrayList::isEmpty()() ) {
	     	var list = [];
	     	for (var i=0 ; i < playlist.@java.util.ArrayList::size()() ; i++ ) {
	     		var source = playlist.@java.util.ArrayList::get(I)(i);
	     		list[list.length] = source.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions.JWPlayerPlaylistSource::toJS()() ;
	     	}
	     	jsArray.playlist = [{ "sources" : list }];
	     }
	     if ( typeof sources != 'undefined' && !sources.@java.util.ArrayList::isEmpty()() ) {
	     	jsArray.sources = [];
	     	for (var i=0 ; i < sources.@java.util.ArrayList::size()() ; i++ ) {
	     		var source = sources.@java.util.ArrayList::get(I)(i);
	     		jsArray.sources[jsArray.sources.length] = source.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions.JWPlayerPlaylistSource::toJS()() ;
	     	}
	     } 

 		 if (  typeof jsArray.sources == 'undefined' && typeof jsArray.playlist == 'undefined') {
	     	jsArray.file = this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions::file ;
	     }
	     
         return jsArray;
	}-*/;
	
	public interface JWPlayerPlaylistSource {
		String 	getFile();	
		JavaScriptObject toJS();
	}

}
