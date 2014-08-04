package fr.emmenemoi.gwt.widgets.jwplayer.client;

public interface JWPlayerInfos {

	public static enum State {
		IDLE, BUFFERING, PLAYING, PAUSED;
	}

	public State getOldState();

	public State getNewState();
}
