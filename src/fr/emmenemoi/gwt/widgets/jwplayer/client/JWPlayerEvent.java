package fr.emmenemoi.gwt.widgets.jwplayer.client;

import com.google.gwt.event.shared.GwtEvent;

public class JWPlayerEvent extends GwtEvent<JWPlayerEvent.JWPlayerEventHandler>
				implements JWPlayerInfos {

	public static Type<JWPlayerEventHandler> TYPE = new Type<JWPlayerEventHandler>();

	public interface JWPlayerEventHandler extends
			com.google.gwt.event.shared.EventHandler {
		void onJWPlayerEvent(JWPlayerEvent event);
	}
	
	private JWPlayerState state;
	private JWPlayerMediaMeta playerMeta;
	
	public JWPlayerEvent(JWPlayerState state) {
		this.state = state;
	}

	public JWPlayerEvent(JWPlayerState state, JWPlayerMediaMeta playerMeta) {
		this.state = state;
		this.playerMeta = playerMeta;
	}
    @Override
    public com.google.gwt.event.shared.GwtEvent.Type<JWPlayerEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(JWPlayerEventHandler handler) {
        handler.onJWPlayerEvent(this);
    }

	@Override
	public State getOldState() {
		if (state != null) {
			return State.valueOf(state.getOldState());
		}
		return null;
	}

	@Override
	public State getNewState() {
		if (state != null) {
			return State.valueOf(state.getNewState());
		}
		return null;
	}

	@Override
	public JWPlayerMediaMeta getPlayerMeta() {
		return this.playerMeta;
	}

	@Override
	public boolean hasMeta() {
		return this.playerMeta != null;
	}

}
