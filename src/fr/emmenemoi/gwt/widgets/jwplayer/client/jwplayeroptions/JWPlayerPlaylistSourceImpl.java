package fr.emmenemoi.gwt.widgets.jwplayer.client.jwplayeroptions;

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
    
}