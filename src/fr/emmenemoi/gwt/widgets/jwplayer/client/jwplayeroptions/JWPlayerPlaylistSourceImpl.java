package fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions;

import com.google.gwt.core.client.JavaScriptObject;

import fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions.JWPlayerPlaylistSource;

public class JWPlayerPlaylistSourceImpl implements JWPlayerPlaylistSource {
	
	String file;
	
	public JWPlayerPlaylistSourceImpl( String file) {
		this.file = file;
	}

	@Override
	public String getFile() {
		return this.file;
	}

	@Override
	public native JavaScriptObject toJS() /*-{
		return {file: this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerPlaylistSourceImpl::file};
	}-*/;
    
}