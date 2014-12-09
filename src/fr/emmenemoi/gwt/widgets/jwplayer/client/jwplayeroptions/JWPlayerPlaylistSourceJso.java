package fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions;

import com.google.gwt.core.client.JavaScriptObject;

import fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions.JWPlayerPlaylistSource;

public class JWPlayerPlaylistSourceJso extends JavaScriptObject implements JWPlayerPlaylistSource {
	public JWPlayerPlaylistSourceJso() {}
	public final native String getFile() /*-{
        return this.file || "";
    }-*/;
}