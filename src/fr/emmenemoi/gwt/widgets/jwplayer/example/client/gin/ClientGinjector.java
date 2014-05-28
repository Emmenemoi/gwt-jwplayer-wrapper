package fr.emmenemoi.gwt.widgets.jwplayer.example.client.gin;

import com.google.gwt.inject.client.GinModules;
import com.gwtplatform.dispatch.client.gin.DispatchAsyncModule;
import fr.emmenemoi.gwt.widgets.jwplayer.example.client.gin.ClientModule;
import com.google.gwt.inject.client.Ginjector;
import com.google.gwt.event.shared.EventBus;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.google.inject.Provider;
import fr.emmenemoi.gwt.widgets.jwplayer.example.client.core.MainPagePresenter;

@GinModules({ DispatchAsyncModule.class, ClientModule.class })
public interface ClientGinjector extends Ginjector {

	EventBus getEventBus();

	PlaceManager getPlaceManager();

	Provider<MainPagePresenter> getMainPagePresenter();

}
