package fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions;

import com.google.gwt.core.client.JavaScriptObject;

import fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerOptions.JWPlayerPlaylistSource;

public class JWPlayerPlaylistSourceImpl implements JWPlayerPlaylistSource {
	
	String _file;
	String _label;
	String _type;
	boolean _default = false;
	
	public JWPlayerPlaylistSourceImpl( String file) {
		this._file = file;
	}

	@Override
	public String getFile() {
		return this._file;
	}

	@Override
	public native JavaScriptObject toJS() /*-{
		var obj = { "file" : this.@fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions.JWPlayerPlaylistSourceImpl::getFile()() };
		return obj;
	}-*/;
    
}