import { reactive, onMounted, watchEffect, computed, watch } from "vue";

export function useAppSetUp() {
  /**
   * state
   */
  const state = reactive({
    count: 0,
  });

  /**
   * computed
   */
  const doubleCnt = computed(() => {
    return state.count * 2;
  });

  /**
   * method
   */
  const inc = () => {
    state.count++;
  };

  /**
   * watcher（監視する変数を指定しないパターン）
   * 実行される関数内で参照している変数が変更された場合に、常に発火する
   */
  watchEffect(() => {
    console.log("カウントが更新されたよ。" + state.count);
  });

  /**
   * watch（監視する変数を指定するパターン）
   * 第一引数で監視する変数を指定し
   * 第2引数に実行する関数を指定する
   */
  watch(
    () => state.count,
    () => {
      console.log("カウントが増えたよおおおおおおおおおお");
    }
  );

  return {
    state,
    inc,
    doubleCnt,
  };
}

export function useAppSetUp2() {
  /**
   * マウント時に発火するメソッド
   */
  onMounted(() => {
    console.log("マウントしたよ！！");
  });
}
