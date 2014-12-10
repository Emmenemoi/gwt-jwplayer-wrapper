package fr.emmenemoi.gwt.widgets.jwplayer.example.client.gin;

import com.google.gwt.inject.client.GinModules;
import com.gwtplatform.dispatch.client.gin.DispatchAsyncModule;

import fr.emmenemoi.gwt.widgets.jwplayer.example.client.gin.ClientModule;

import com.google.gwt.inject.client.Ginjector;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.google.inject.Provider;
import com.google.web.bindery.event.shared.EventBus;

import fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.MainPagePresenter;

@GinModules({ DispatchAsyncModule.class, ClientModule.class })
public interface ClientGinjector extends Ginjector {

	EventBus getEventBus();

	PlaceManager getPlaceManager();

	Provider<MainPagePresenter> getMainPagePresenter();

}
