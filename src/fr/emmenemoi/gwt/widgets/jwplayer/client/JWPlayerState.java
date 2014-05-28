package fr.emmenemoi.gwt.widgets.jwplayer.client;

import com.google.gwt.core.client.JavaScriptObject;

interface JWPlayerState {
	String getOldState();
	String getNewState();		
}

class JWPlayerStateJso extends JavaScriptObject implements JWPlayerState {
	// Overlay types always have protected, zero-arg ctors
	protected JWPlayerStateJso() { }

	public final native String getOldState() /*-{ return this.oldstate; }-*/;
	public final native String getNewState() /*-{ return this.newstate; }-*/;
}

/** Any number of non-JSO types may implement the WebcamStreamEvent interface. */
class JWPlayerStateImpl implements JWPlayerState {
  private final String oldstate;
  private final String newstate;

  public JWPlayerStateImpl(String oldstate, String newstate) {
    this.oldstate = oldstate;
    this.newstate = newstate;
  }
  
  public String getOldState() {
    return this.oldstate;
  }
  
  public String getNewState() {
    return this.newstate;
  }
  
  public String toString() {
	  return "{ oldstate: "+this.getOldState()+" , newstate: "+this.getOldState()+"}"; 
  }
  
}