package fr.emmenemoi.gwt.widgets.jwplayer.client;

import com.google.gwt.core.client.JavaScriptObject;

/*
 *  ORIGINAL event Object:
 * 	metadata: Object
		bandwidth: 4721
		currentLevel: "1 of 1 (244kbps, 320px)"
		droppedFrames: 0
		width: 320
	type: "jwplayerMediaMeta"
 *
 *
 */

interface JWPlayerMediaMeta {
	int 	getBandwidth();
	String 	getCurrentLevel();	
	int		getDroppedFrames();
	int		getMediaWidth();
}

class JWPlayerMediaMetaJso extends JavaScriptObject implements JWPlayerMediaMeta {
	// Overlay types always have protected, zero-arg ctors
	protected JWPlayerMediaMetaJso() { }

	public final native int 	getBandwidth() /*-{ 	return this.bandwidth; }-*/;
	public final native String 	getCurrentLevel() /*-{ 	return this.currentLevel; }-*/;
	public final native int 	getDroppedFrames() /*-{ return this.currentLevel; }-*/;
	public final native int 	getMediaWidth() /*-{ 	return this.currentLevel; }-*/;
}

/** Any number of non-JSO types may implement the WebcamStreamEvent interface. */
class JWPlayerMediaMetaImpl implements JWPlayerMediaMeta {
	private final int 		bandwidth;
  	private final String 	currentLevel;
  	private final int		droppedFrames;
  	private final	int		width;

  	public JWPlayerMediaMetaImpl(int bandwidth, String currentLevel, int droppedFrames, int width) {
	  this.bandwidth = bandwidth;
    	this.currentLevel = currentLevel;
    	this.droppedFrames = droppedFrames;
    	this.width = width;
  	}

	@Override
	public int getBandwidth() {
		return this.bandwidth;
	}
	
	@Override
	public String getCurrentLevel() {
		return this.currentLevel;
	}
	
	@Override
	public int getDroppedFrames() {
		return this.droppedFrames;
	}
	
	@Override
	public int getMediaWidth() {
		return this.width;
	}

  /*
  public String toString() {
	  return "{ oldstate: "+this.getOldState()+" , newstate: "+this.getOldState()+"}"; 
  }
  */
}