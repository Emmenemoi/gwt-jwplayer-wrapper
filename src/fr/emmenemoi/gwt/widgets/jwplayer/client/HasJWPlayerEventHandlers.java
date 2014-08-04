package fr.emmenemoi.gwt.widgets.jwplayer.client;

import com.google.gwt.event.shared.HandlerRegistration;

public interface HasJWPlayerEventHandlers {

	HandlerRegistration addJWPlayerEventHandler(JWPlayerEvent.JWPlayerEventHandler handler);
}
